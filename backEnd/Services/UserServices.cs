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
    
    public async Task Update(Guid id, User user)
    {
        var Userctual = context.user.Find(id);
        if (Userctual != null)
        {
            Userctual.Nombres = user.Nombres;
            Userctual.Apellidos = user.Apellidos;
            Userctual.Usuario = user.Usuario;
            Userctual.Correo = user.Correo;
            await context.SaveChangesAsync();
        }
    }

     public async Task Delete(Guid id)
    {
        var userActual = context.user.Find(id);
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
    Task Update(Guid id, User user);
    Task Delete(Guid id);

}