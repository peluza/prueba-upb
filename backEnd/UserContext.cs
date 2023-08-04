using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi;

public class UserContext : DbContext
{
    public DbSet<User> user { get; set; }

    public UserContext(DbContextOptions<UserContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        List<User> userInit = new List<User>();
        userInit.Add(new User() { UserId = Guid.Parse("fe2de405-c38e-4c90-ac52-da0540dfb4ef"), Nombres = "Edison Esteban", Apellidos = "Isaza López", Usuario = "eisaza", Correo = "edisonisaza@gmail.com" });
        userInit.Add(new User() { UserId = Guid.Parse("fe2de405-c38e-4c90-ac52-da0540dfb402"), Nombres = "Yoamin Estiven", Apellidos = "Jaramillo Munera", Usuario = "yjaramillo", Correo = "correo@gmail.com" });


        modelBuilder.Entity<User>(user =>
        {
            user.ToTable("user");
            user.HasKey(p => p.UserId);

            user.Property(p => p.Nombres).IsRequired().HasMaxLength(30);

            user.Property(p => p.Apellidos).IsRequired().HasMaxLength(30);

            user.Property(p => p.Usuario).IsRequired().HasMaxLength(15);

            user.Property(p => p.Correo).IsRequired().HasMaxLength(60);

            user.HasData(userInit);
        });

    }

}