using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Models;

public class User
{
    public int UserId {get;set;}
    public string Nombres {get;set;}

    public string Apellidos {get;set;}

    public string Usuario {get;set;}

    public string Correo {get;set;}

}