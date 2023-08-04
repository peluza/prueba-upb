using webapi;

var builder = WebApplication.CreateBuilder(args);
var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddNpgsql<UserContext>("Host=localhost;Port=5432;Username=postgres;Password=Eisaza.123!;Database=registroUsuarios");

builder.Services.AddScoped<IUserServices, UserServices>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                        builder.WithOrigins("http://localhost");
                      });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
