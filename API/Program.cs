using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(option =>
{
    option.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // Ensure no trailing slash
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials(); // Required if using authentication
        });
});

var app = builder.Build();

app.UseCors("AllowFrontend");


app.MapControllers();
DbInitializer.InitDb(app);

app.Run();
