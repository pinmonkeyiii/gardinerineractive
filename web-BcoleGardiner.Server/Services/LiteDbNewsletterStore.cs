using LiteDB;
using web_BcoleGardiner.Server.Models;

namespace web_bcolegardiner.server.Services;

public class LiteDbNewsletterStore : INewsletterStore
{
    private readonly ILiteCollection<NewsletterSubscription> _col;

    public LiteDbNewsletterStore(LiteDatabase db)
    {
        _col = db.GetCollection<NewsletterSubscription>("subscriptions");
        _col.EnsureIndex(x => x.Email, unique: true);
    }

    public bool Exists(string email) => _col.Exists(x => x.Email == email);

    public void Add(NewsletterSubscription sub)
    {
        sub.SubscribedAt = DateTimeOffset.UtcNow;
        _col.Insert(sub);
    }
}
