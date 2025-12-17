using System.Net.Http.Json;
using System.Text.Json;
using web_BcoleGardiner.Server.Models;

namespace web_bcolegardiner.server.Services;

public class GoogleSheetsNewsletterStore : INewsletterStore
{
    private readonly HttpClient _http;
    private readonly string _baseUrl;

    private static readonly JsonSerializerOptions JsonOpts = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public GoogleSheetsNewsletterStore(HttpClient http, IConfiguration config)
    {
        _http = http;
        _baseUrl = config["NEWSLETTER_SHEETS_URL"]
            ?? throw new InvalidOperationException("Missing NEWSLETTER_SHEETS_URL environment variable.");

        _http.DefaultRequestHeaders.Accept.Clear();
        _http.DefaultRequestHeaders.Accept.ParseAdd("application/json");
    }

    public bool Exists(string email)
    {
        email = (email ?? "").Trim().ToLowerInvariant();
        var url = $"{_baseUrl}?email={Uri.EscapeDataString(email)}";

        var resp = _http.GetAsync(url).GetAwaiter().GetResult();
        var body = resp.Content.ReadAsStringAsync().GetAwaiter().GetResult();

        if (!resp.IsSuccessStatusCode)
            throw new InvalidOperationException(
                $"Sheets GET failed: {(int)resp.StatusCode} {resp.ReasonPhrase}. Body: {Preview(body)}");

        try
        {
            var data = JsonSerializer.Deserialize<ExistsResponse>(body, JsonOpts);
            return data?.Exists ?? false;
        }
        catch (Exception ex)
        {
            throw new InvalidOperationException(
                $"Sheets GET returned non-JSON. Body: {Preview(body)}", ex);
        }
    }

    public void Add(NewsletterSubscription sub)
    {
        var payload = new
        {
            email = (sub.Email ?? "").Trim().ToLowerInvariant(),
            name = (sub.Name ?? "").Trim(),
            source = "website"
        };

        var resp = _http.PostAsJsonAsync(_baseUrl, payload).GetAwaiter().GetResult();
        var body = resp.Content.ReadAsStringAsync().GetAwaiter().GetResult();

        if (!resp.IsSuccessStatusCode)
            throw new InvalidOperationException(
                $"Sheets POST failed: {(int)resp.StatusCode} {resp.ReasonPhrase}. Body: {Preview(body)}");
    }

    private static string Preview(string s)
    {
        if (string.IsNullOrWhiteSpace(s)) return "(empty)";
        s = s.Replace("\n", " ").Replace("\r", " ").Trim();
        return s.Length <= 250 ? s : s[..250] + "...";
    }

    private record ExistsResponse(bool Exists);
}
