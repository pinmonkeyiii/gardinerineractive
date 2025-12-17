// Services/SmtpEmailSender.cs
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using Microsoft.Extensions.Options;
using web_bcolegardiner.server.Services;

namespace web_BcoleGardiner.Server.Services;

public class SmtpEmailSender(IOptions<EmailOptions> opt) : IEmailSender
{
    private readonly EmailOptions _opt = opt.Value;

    public async Task SendAsync(string subject, string htmlBody, string? replyTo = null, CancellationToken ct = default)
    {
        var msg = new MimeMessage();
        msg.From.Add(MailboxAddress.Parse(_opt.From));
        msg.To.Add(MailboxAddress.Parse(_opt.To));
        msg.Subject = subject;

        if (!string.IsNullOrWhiteSpace(replyTo))
            msg.ReplyTo.Add(MailboxAddress.Parse(replyTo));

        msg.Body = new BodyBuilder { HtmlBody = htmlBody }.ToMessageBody();

        using var client = new SmtpClient();
        client.Timeout = 10000;
        //var secure = _opt.Smtp.UseStartTls ? SecureSocketOptions.StartTls : SecureSocketOptions.Auto;
        var secure = _opt.Smtp.UseStartTls ? SecureSocketOptions.StartTls : SecureSocketOptions.SslOnConnect;

        await client.ConnectAsync(_opt.Smtp.Host, _opt.Smtp.Port, secure, ct);
        await client.AuthenticateAsync(_opt.Smtp.User, _opt.Smtp.Password, ct);
        await client.SendAsync(msg, ct);
        await client.DisconnectAsync(true, ct);
    }
}
