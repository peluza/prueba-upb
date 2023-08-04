using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace backEnd.Controllers;

[ApiController]
[Route("/api/v1/[controller]")]

public class UserController : ControllerBase
{
    IUserServices userServices;
    webapi.UserContext dbcontext;

     public UserController(IUserServices service)
    {
       userServices = service;
    }

    [HttpGet]
    public IActionResult Index() 
    {
        return Ok(userServices.Get());
    }

    public IActionResult Post([FromBody] User user)
    {
        userServices.Save(user);
        return Ok("Guardado Exitosamente");
    }

    public IActionResult Post([FromBody] Guid id, User user)
    {
        userServices.Update(id, user);
        return Ok("Actualizado Exitosamente");
    }
    
    public IActionResult Delete(Guid id) 
    {
        userServices.Delete(id);
        return Ok("Eliminado Exitosamente");
    }

    [HttpGet]
    [Route("createdb")]
    public IActionResult CreateDatabase()
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        dbcontext.Database.EnsureCreated();
        return Ok();
    }

}