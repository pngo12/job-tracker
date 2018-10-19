using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers
{
  [Route("api/users")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private TrackerContext _context;

    public UserController(TrackerContext context)
    {
      _context = context;
    }

    // Get api/user
    [HttpGet]
    public IActionResult Get()
    {
      if (_context.users.ToList().Count == 0)
      {
        return NotFound();
      }
      return Ok(_context.users.Include(j => j.job).ToList());
    }

    [HttpGet("{id}", Name = "Getuser")]
    public ActionResult<Users> GetById(int id)
    {
      Users item = _context.users.Where(u => u.user_id == id).Include(j => j.job).FirstOrDefault();
      if (item == null)
      {
        return NotFound();
      }
      return Ok(item);
    }

    [HttpPost]
    public IActionResult Post([FromBody]Users user)
    {
      if (user == null)
      {
        return BadRequest();
      }
      _context.users.Add(user);
      _context.SaveChanges();

      return CreatedAtRoute("Getuser", new {id = user.user_id}, user);
    }


    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]Users u)
    {
      if (u == null || u.user_id != id)
      {
        return BadRequest();
      }

      _context.users.Update(u);
      _context.SaveChanges();
      return NoContent();

    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      Users u = _context.users.Find(id);
      if (u == null)
      {
        return NotFound();
      }
      _context.users.Remove(u);
      _context.SaveChanges();
      return Ok(u);
    }

  }
}
