using LiteDB;

namespace web_BcoleGardiner.Server.Models;

public class NewsletterSubscription
{
    public ObjectId Id { get; set; } = ObjectId.NewObjectId();
    public required string Email { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateTimeOffset SubscribedAt { get; set; } = DateTimeOffset.UtcNow;
}
