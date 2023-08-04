using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi;

namespace backEnd.Controllers;

[ApiController]
[Route("/api/v1/[controller]")]

public class UserController : ControllerBase
{
    IUserServices userServices;
    UserContext dbcontext;

     public UserController(IUserServices service, UserContext db)
    {
       userServices = service;
       dbcontext = db;
    }

    [HttpGet]
    public IActionResult Index() 
    {
        return Ok(userServices.Get());
    }

    [HttpPost]
    public IActionResult Post([FromBody] User user)
    {
        userServices.Save(user);
        return Ok("Guardado Exitosamente");
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] User user)
    {
        userServices.Update(id, user);
        return Ok("Actualizado Exitosamente");
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id) 
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