using LiteDB;
using web_bcolegardiner.server.Services;
using web_BcoleGardiner.Server.Services;
using WebBcoleGardiner.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

// LiteDB single instance (thread-safe inside one process)
var dataDir = Path.Combine(builder.Environment.ContentRootPath, "App_Data");
Directory.CreateDirectory(dataDir);
var dbPath = Path.Combine(dataDir, "newsletter.db");
builder.Services.AddSingleton(new LiteDatabase($"Filename={dbPath};Connection=shared"));

// Store service
builder.Services.AddSingleton<INewsletterStore, LiteDbNewsletterStore>();

// Contact Email
builder.Services.AddMemoryCache();
builder.Services.AddSingleton<IRateLimiter, InMemoryRateLimiter>();
builder.Services.Configure<EmailOptions>(builder.Configuration.GetSection("Email"));
builder.Services.AddSingleton<IEmailSender, SmtpEmailSender>();

var app = builder.Build();

var port = Environment.GetEnvironmentVariable("PORT") ?? "10000";
app.Urls.Add($"http://0.0.0.0:{port}");

// Configure middleware
app.UseCors("AllowReactApp");
app.UseHttpsRedirection();
app.UseDefaultFiles();
app.MapControllers();
app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.MapFallbackToFile("index.html");
}

app.Run();