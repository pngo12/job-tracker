using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace server
{
  public class Users
  {
    [Key]
    public int user_id {  get; set; }

    public string name {get; set;}

    public string email {get; set;}

    public string password {get; set;}


    public int job_id {get;set;}
    [ForeignKey("job_id")]

    public Jobs job {get;set;}


    public Users()
    {

    }

    public Users(string n, string e, string pw)
    {
      this.name = n;
      this.email = e;
      this.password = pw;
    }
  }
}