using web_BcoleGardiner.Server.Models;

namespace web_bcolegardiner.server.Services;

public interface INewsletterStore
{
    bool Exists(string email);
    void Add(NewsletterSubscription sub);
}
