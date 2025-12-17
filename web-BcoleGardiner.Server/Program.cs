using LiteDB;
using web_bcolegardiner.server.Services;
using web_BcoleGardiner.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowNetlify", policy =>
        policy
            .AllowAnyHeader()
            .AllowAnyMethod()
            .SetIsOriginAllowed(origin =>
            {
                if (string.IsNullOrWhiteSpace(origin)) return false;
                if (origin == "https://gardinerinteractive.com") return true;

                // allow any netlify subdomain
                return origin.EndsWith(".netlify.app", StringComparison.OrdinalIgnoreCase);
            })
    );
});

// LiteDB single instance (thread-safe inside one process)
var dataDir = Path.Combine(builder.Environment.ContentRootPath, "App_Data");
Directory.CreateDirectory(dataDir);
var dbPath = Path.Combine(dataDir, "newsletter.db");

// Store service
/* This 2 lines will add a Store to a LiteDB, but that doesn't work on free Render services, so I am using a Google SHeet instead - bcg */
//builder.Services.AddSingleton(new LiteDatabase($"Filename={dbPath};Connection=shared"));
//builder.Services.AddSingleton<INewsletterStore, LiteDbNewsletterStore>();
builder.Services.AddHttpClient();
builder.Services.AddSingleton<INewsletterStore, GoogleSheetsNewsletterStore>();

// Contact Email
builder.Services.AddMemoryCache();
builder.Services.AddSingleton<IRateLimiter, InMemoryRateLimiter>();
builder.Services.Configure<EmailOptions>(builder.Configuration.GetSection("Email"));
builder.Services.AddSingleton<IEmailSender, SmtpEmailSender>();

var app = builder.Build();

/* Changing this so that it will hopefully work in Production and in Dev
var port = Environment.GetEnvironmentVariable("PORT") ?? "10000";
app.Urls.Add($"http://0.0.0.0:{port}");
*/

// Only force Render-style binding in Production (or when PORT is set)
var port = Environment.GetEnvironmentVariable("PORT");
if (!string.IsNullOrEmpty(port) && !app.Environment.IsDevelopment())
{
    app.Urls.Add($"http://0.0.0.0:{port}");
}

// Configure middleware
//app.UseCors("AllowReactApp");
app.UseCors("AllowNetlify");
app.UseDefaultFiles();
app.MapControllers();
app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseHttpsRedirection();
}
else
{
    app.MapFallbackToFile("index.html");
}

app.Run();