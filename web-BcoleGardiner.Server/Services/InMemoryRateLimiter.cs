using Microsoft.Extensions.Caching.Memory;

namespace web_BcoleGardiner.Server.Services;

public class InMemoryRateLimiter : IRateLimiter
{
    private readonly IMemoryCache _cache;

    public InMemoryRateLimiter(IMemoryCache cache) => _cache = cache;

    private sealed class Counter { public int Count; }

    public Task<bool> ShouldThrottleAsync(string key, TimeSpan window, int maxRequests)
    {
        // cache entry resets after `window`
        var counter = _cache.GetOrCreate(key, entry =>
        {
            entry.AbsoluteExpirationRelativeToNow = window;
            return new Counter();
        });

        // Increment atomically
        var newCount = Interlocked.Increment(ref counter!.Count);
        var shouldThrottle = newCount > maxRequests;
        return Task.FromResult(shouldThrottle);
    }
}

