using Microsoft.EntityFrameworkCore;

namespace server
{
  public class TrackerContext : DbContext
  {
    public TrackerContext(DbContextOptions<TrackerContext> options) : base(options)
    {

    }
    
    public DbSet<Users>        users       {get;set;}    
    public DbSet<Jobs>         jobs        {get;set;}    
    public DbSet<StatusType>  statusTypes {get;set;}    
 
  }
}