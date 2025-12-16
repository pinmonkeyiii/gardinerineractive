namespace web_BcoleGardiner.Server.Services;

public interface IRateLimiter
{
    /// <summary>Returns true if the call should be throttled.</summary>
    Task<bool> ShouldThrottleAsync(string key, TimeSpan window, int maxRequests);
}
