using webapi;
using webapi.Models;

public class UserServices : IUserServices
{
    UserContext context;

    public UserServices(UserContext dbcontext)
    {
        context = dbcontext;
    }

     public IEnumerable<User> Get()
    {
        return context.user;
    }

    public async Task Save(User user){
        context.user.Add(user);
        await context.SaveChangesAsync();
    }
    
    public async Task Update(int UserId, User user)
    {
        var Userctual = context.user.Find(UserId);
        if (Userctual != null)
        {
            Userctual.Nombres = user.Nombres;
            Userctual.Apellidos = user.Apellidos;
            Userctual.Usuario = user.Usuario;
            Userctual.Correo = user.Correo;
            await context.SaveChangesAsync();
        }
    }

     public async Task Delete(int UserId)
    {
        var userActual = context.user.Find(UserId);
        if (userActual != null)
        {
            context.Remove(userActual);
            await context.SaveChangesAsync();
        }
    }
}

public interface IUserServices
{
    IEnumerable<User> Get();
    Task Save(User user);
    Task Update(int UserId, User user);
    Task Delete(int UserId);

}