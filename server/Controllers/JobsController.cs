// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace server.Controllers
// {
//   [Route("api/jobs")]
//   [ApiController]
//   public class JobsController : ControllerBase
//   {
//     private TrackerContext _context;

//     public JobsController(TrackerContext context)
//     {
//       _context = context;
//     }

//     // Get api/user
//     [HttpGet]
//     public IActionResult Get()
//     {
//       if (_context.users.ToList().Count == 0)
//       {
//         return NotFound();
//       }
//       return Ok(_context.users.ToList());
//     }

//     [HttpGet("{id}", Name = "Getuser")]
//     public ActionResult<User> GetById(int id)
//     {
//       User item = _context.users.Where(c => c.user_id == id).Include("details").FirstOrDefault();
//       if (item == null)
//       {
//         return NotFound();
//       }
//       return Ok(item);
//     }

//     [HttpPost]
//     public IActionResult Post([FromBody]User user)
//     {
//       if (user == null)
//       {
//         return BadRequest();
//       }
//       _context.users.Add(user);
//       _context.SaveChanges();

//       return CreatedAtRoute("Getuser", new {id = user.user_id}, user);
//     }


//     [HttpPut("{id}")]
//     public IActionResult Put(int id, [FromBody]User u)
//     {
//       if (u == null || u.user_id != id)
//       {
//         return BadRequest();
//       }

//       _context.users.Update(u);
//       _context.SaveChanges();
//       return NoContent();

//     }

//     [HttpDelete("{id}")]
//     public IActionResult Delete(int id)
//     {
//       User u = _context.users.Find(id);
//       if (u == null)
//       {
//         return NotFound();
//       }
//       _context.users.Remove(u);
//       _context.SaveChanges();
//       return Ok(u);
//     }

//   }
// }
