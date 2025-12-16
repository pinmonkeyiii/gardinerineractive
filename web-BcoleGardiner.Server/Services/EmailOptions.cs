namespace web_bcolegardiner.server.Services;

public class EmailOptions
{
    public string From { get; set; } = string.Empty;
    public string To { get; set; } = string.Empty;
    public SendGridOptions SendGrid { get; set; } = new();
    public class SendGridOptions
    {
        public string ApiKey { get; set; } = string.Empty;
    }
    public SmtpOptions Smtp { get; set; } = new();
    public class SmtpOptions
    {
        public string Host { get; set; } = string.Empty;
        public int Port { get; set; } = 587;
        public string User { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public bool UseStartTls { get; set; } = true;
    }
}