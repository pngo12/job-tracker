using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers
{
  [Route("api/jobs")]
  [ApiController]
  public class JobsController : ControllerBase
  {
    private TrackerContext _context;

    public JobsController(TrackerContext context)
    {
      _context = context;
    }

    // Get api/user
    [HttpGet]
    public IActionResult Get()
    {
      if (_context.jobs.ToList().Count == 0)
      {
        return NotFound();
      }
      return Ok(_context.jobs.ToList());
    }

    [HttpGet("{id}", Name = "GetJobs")]
    public ActionResult<Users> GetById(int id)
    {
      Jobs item = _context.jobs.Where(j => j.job_id == id).FirstOrDefault();
      if (item == null)
      {
        return NotFound();
      }
      return Ok(item);
    }

    [HttpPost]
    public IActionResult Post([FromBody]Jobs job)
    {
      if (job == null)
      {
        return BadRequest();
      }
      _context.jobs.Add(job);
      _context.SaveChanges();

      return CreatedAtRoute("Getjob", new {id = job.job_id}, job);
    }


    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]Jobs j)
    {
      if (j == null || j.job_id != id)
      {
        return BadRequest();
      }

      _context.jobs.Update(j);
      _context.SaveChanges();
      return NoContent();

    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      Jobs j = _context.jobs.Find(id);
      if (j == null)
      {
        return NotFound();
      }
      _context.jobs.Remove(j);
      _context.SaveChanges();
      return Ok(j);
    }

  }
}
