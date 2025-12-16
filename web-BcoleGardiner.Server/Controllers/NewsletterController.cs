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
        if (string.IsNullOrWhiteSpace(dto.Email))
            return BadRequest(new { message = "Email is required." });

        if (store.Exists(dto.Email))
            return Ok(new { message = "You’re already subscribed." });

        store.Add(sub: new NewsletterSubscription { Email = dto.Email, Name = string.IsNullOrWhiteSpace(dto.Name) ? dto.Email : dto.Name.Trim() });
        return Ok(new { message = "Subscription successful!" });
    }

    public class SubscribeDto
    {
        public string Email { get; set; } = string.Empty;
        public string? Name { get; set; }
    }
}