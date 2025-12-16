using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace web_bcolegardiner.server.Services;

public class SendGridEmailSender : IEmailSender
{
    private readonly string _apiKey;
    private readonly string _from;
    private readonly string _to;

    public SendGridEmailSender(IOptions<EmailOptions> opt)
    {
        var o = opt.Value;
        _from = o.From;
        _to = o.To;
        // Prefer env var if set; otherwise user-secrets/appsettings
        _apiKey = Environment.GetEnvironmentVariable("SENDGRID_API_KEY")
                  ?? o.SendGrid.ApiKey
                  ?? throw new InvalidOperationException("Missing SendGrid API key");
    }

    public async Task SendAsync(string subject, string htmlBody, string? replyTo = null, CancellationToken ct = default)
    {
        var client = new SendGridClient(_apiKey);

        var from = new EmailAddress(_from, "Site Contact");
        var to = new EmailAddress(_to);

        var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent: null, htmlContent: htmlBody);

        if (!string.IsNullOrWhiteSpace(replyTo))
            msg.ReplyTo = new EmailAddress(replyTo);

        var resp = await client.SendEmailAsync(msg, ct);
        if ((int)resp.StatusCode >= 400)
        {
            var body = await resp.Body.ReadAsStringAsync(ct);
            throw new Exception($"SendGrid failed: {(int)resp.StatusCode} {resp.StatusCode}\n{body}");
        }
    }
}
