using Microsoft.AspNetCore.Mvc;
using web_bcolegardiner.server.Services;
using web_BcoleGardiner.Server.Models;

[ApiController]
[Route("api/[controller]")]
public class NewsletterController : ControllerBase
{
    [HttpPost]
    public IActionResult Subscribe([FromBody] SubscribeDto dto, [FromServices] INewsletterStore store)
    {
        var email = (dto.Email ?? "").Trim().ToLowerInvariant();
        var name = (dto.Name ?? "").Trim();

        if (string.IsNullOrWhiteSpace(email))
            return BadRequest(new { message = "Email is required." });

        try
        {
            if (store.Exists(email))
                return Ok(new { message = "Email address is already subscribed.", created = false });

            store.Add(new NewsletterSubscription
            {
                Email = email,
                Name = string.IsNullOrWhiteSpace(name) ? email : name
            });

            return Ok(new { message = "Subscription successful!", created = true });
        }
        catch (Exception)
        {
            // This is gold while debugging locally
            return StatusCode(500, new { message = "Unable to complete subscription right now. Please try again later." });
        }
    }

    public class SubscribeDto
    {
        public string Email { get; set; } = string.Empty;
        public string? Name { get; set; }
    }
}