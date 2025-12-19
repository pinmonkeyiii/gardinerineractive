using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using web_bcolegardiner.server.Services;

namespace web_BcoleGardiner.Server.Services;

public class BrevoApiEmailSender : IEmailSender
{
    private readonly HttpClient _http;
    private readonly string _apiKey;
    private readonly string _senderEmail;
    private readonly string _senderName;
    private readonly string _toEmail;

    public BrevoApiEmailSender(HttpClient http, IConfiguration config)
    {
        _http = http;

        _apiKey = config["BREVO_API_KEY"] ?? config["Brevo:ApiKey"]
            ?? throw new InvalidOperationException("Missing Brevo ApiKey");

        _senderEmail = config["BREVO_SENDER_EMAIL"] ?? config["Brevo:SenderEmail"]
            ?? throw new InvalidOperationException("Missing Brevo SenderEmail");

        _senderName = config["BREVO_SENDER_NAME"] ?? config["Brevo:SenderName"] ?? "Website Contact";

        _toEmail = config["BREVO_TO_EMAIL"] ?? config["Brevo:ToEmail"] ?? config["Email:To"]
            ?? throw new InvalidOperationException("Missing Brevo ToEmail");

        _http.BaseAddress = new Uri("https://api.brevo.com/v3/");
        _http.DefaultRequestHeaders.Accept.Clear();
        _http.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        if (!_http.DefaultRequestHeaders.Contains("api-key"))
            _http.DefaultRequestHeaders.Add("api-key", _apiKey);

    }

    public async Task SendAsync(string subject, string htmlBody, string? replyTo = null, CancellationToken ct = default)
    {
        var payload = new
        {
            sender = new { email = _senderEmail, name = _senderName },
            to = new[] { new { email = _toEmail } },
            subject,
            htmlContent = htmlBody,
            replyTo = string.IsNullOrWhiteSpace(replyTo) ? null : new { email = replyTo }
        };

        var json = JsonSerializer.Serialize(payload, new JsonSerializerOptions { DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull });
        using var content = new StringContent(json, Encoding.UTF8, "application/json");

        using var resp = await _http.PostAsync("smtp/email", content, ct);
        var body = await resp.Content.ReadAsStringAsync(ct);

        if (!resp.IsSuccessStatusCode)
            throw new InvalidOperationException($"Brevo email API failed: {(int)resp.StatusCode} {resp.ReasonPhrase}. Body: {Preview(body)}");
    }

    private static string Preview(string s)
    {
        if (string.IsNullOrWhiteSpace(s)) return "(empty)";
        s = s.Replace("\n", " ").Replace("\r", " ").Trim();
        return s.Length <= 400 ? s : s[..400] + "...";
    }
}
