using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace server
{
  public class Jobs
  {
    [Key] public int job_id  {get;set;}

    public DateTime date_added {get;set;}

    [ForeignKey("StatusTypesForgeinKey")] public int statustype_id {get;set;}

    public string company_name {get;set;}

    public string link_to_job_post {get;set;}

    public Jobs()
    {

    }

    public Jobs(DateTime dt,int id, string cn, string l2jp)
    {
      this.date_added = dt;
      this.statustype_id = id;
      this.company_name = cn;
      this.link_to_job_post = l2jp;

    }
  }
  
}