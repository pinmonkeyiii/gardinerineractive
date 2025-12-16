namespace web_bcolegardiner.server.Services;

public interface IEmailSender
{
    Task SendAsync(string subject, string htmlBody, string? replyTo = null, CancellationToken ct = default);
}
