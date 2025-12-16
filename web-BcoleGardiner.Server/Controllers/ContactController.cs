using Microsoft.AspNetCore.Mvc;
using System.Net;
using web_bcolegardiner.server.Services;
using web_BcoleGardiner.Server.Services;

namespace web_bcolegardiner.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IEmailSender _email;
    private readonly IRateLimiter _limiter;

    public ContactController(IEmailSender email, IRateLimiter limiter)
    {
        _email = email;
        _limiter = limiter;
    }

    public record ContactDto(string? Name, string Email, string Message, string? Hp = null);

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ContactDto dto, CancellationToken ct)
    {
        // ✅ Honeypot (bots often fill hidden fields). Quietly accept but do nothing.
        if (!string.IsNullOrWhiteSpace(dto.Hp))
            return Ok(new { message = "Thanks! Your message has been sent." });

        if (string.IsNullOrWhiteSpace(dto.Email) || string.IsNullOrWhiteSpace(dto.Message))
            return BadRequest(new { message = "Email and message are required." });

        // Light server-side sanity caps
        if (dto.Email.Length > 320 || dto.Message.Length > 4000)
            return BadRequest(new { message = "Message is too long." });

        // ✅ Per-IP rate limit
        var ip = HttpContext.Request.Headers["X-Forwarded-For"].FirstOrDefault()
                 ?? HttpContext.Connection.RemoteIpAddress?.ToString()
                 ?? "unknown";

        var window = TimeSpan.FromMinutes(1);
        var maxRequests = 1;  // allow 1 request per minute from same IP

        if (await _limiter.ShouldThrottleAsync($"contact:{ip}", window, maxRequests))
            return StatusCode(429, new { message = "You’re sending messages too fast. Please wait a minute and try again." });

        // Build and send the email
        var subject = $"New Contact from {dto.Name ?? "(No name)"}";
        var body = $@"
                    <p><strong>Name:</strong> {WebUtility.HtmlEncode(dto.Name)}</p>
                    <p><strong>Email:</strong> {WebUtility.HtmlEncode(dto.Email)}</p>
                    <p><strong>Message:</strong><br/>{WebUtility.HtmlEncode(dto.Message).Replace("\n", "<br/>")}</p>";

        await _email.SendAsync(subject, body, replyTo: dto.Email, ct);

        return Ok(new { message = "Thanks! Your message has been sent." });
    }
}