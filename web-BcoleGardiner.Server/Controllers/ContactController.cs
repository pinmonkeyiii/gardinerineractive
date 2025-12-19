using Microsoft.AspNetCore.Mvc;
using System.Net;
using web_bcolegardiner.server.Services;
using web_BcoleGardiner.Server.Services;

namespace web_bcolegardiner.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController(IEmailSender email, IRateLimiter limiter) : ControllerBase
{
    private readonly IEmailSender _email = email;
    private readonly IRateLimiter _limiter = limiter;

    public record ContactDto(string? Name, string Email, string Message, string? Hp = null);

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ContactDto dto, CancellationToken ct)
    {
        if (!string.IsNullOrWhiteSpace(dto.Hp))
            return Ok(new { message = "Thanks! Your message has been sent." });

        if (string.IsNullOrWhiteSpace(dto.Email) || string.IsNullOrWhiteSpace(dto.Message))
            return BadRequest(new { message = "Email and message are required." });

        if (dto.Email.Length > 320 || dto.Message.Length > 4000)
            return BadRequest(new { message = "Message is too long." });

        var ip = HttpContext.Request.Headers["X-Forwarded-For"].FirstOrDefault()
                 ?? HttpContext.Connection.RemoteIpAddress?.ToString()
                 ?? "unknown";

        var window = TimeSpan.FromMinutes(1);
        var maxRequests = 1;

        if (await _limiter.ShouldThrottleAsync($"contact:{ip}", window, maxRequests))
            return StatusCode(429, new { message = "You’re sending messages too fast. Please wait a minute and try again." });

        var subject = $"New Contact from {dto.Name ?? "(No name)"}";
        var body = $@"
            <p><strong>Name:</strong> {WebUtility.HtmlEncode(dto.Name)}</p>
            <p><strong>Email:</strong> {WebUtility.HtmlEncode(dto.Email)}</p>
            <p><strong>Message:</strong><br/>{WebUtility.HtmlEncode(dto.Message).Replace("\n", "<br/>")}</p>";

        try
        {
            using var cts = CancellationTokenSource.CreateLinkedTokenSource(ct);
            cts.CancelAfter(TimeSpan.FromSeconds(10)); // prevent hangs -> gateway timeouts

            await _email.SendAsync(subject, body, replyTo: dto.Email, cts.Token);

            return Ok(new { message = "Thanks! Your message has been sent." });
        }
        catch (OperationCanceledException)
        {
            return StatusCode(504, new { message = "Email service timed out. Please try again." });
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);

            if (HttpContext.RequestServices.GetRequiredService<IHostEnvironment>().IsDevelopment())
                return StatusCode(500, new { message = ex.Message });

            return StatusCode(500, new { message = "Email failed to send. Please try again later." });
        }
    }
}