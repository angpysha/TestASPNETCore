using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TestApp.Models;

namespace TestApp.Controllers
{
   // [Route("[controller]")]
   // [ResponseCache]
    public class ContactsController : Controller
    {
        private readonly AppDbContext _context;

        public ContactsController(AppDbContext context)
        {
            _context = context;    
        }

        // GET: Contacts
        public async Task<IEnumerable<Contact>> GetData()
        {
            return await _context.Contacts.ToListAsync();
            // return View(await _context.Contacts.ToListAsync());
        }

        public async Task<ActionResult> Index()
        {
           // return await _context.Contacts.ToListAsync();
             return View();
        }

        // GET: Contacts/Details/5
        //public async Task<IActionResult> Details(int? id)
        //{
        //    if (id == null)
        //    {
        //        return NotFound();
        //    }

        //    var contact = await _context.Contacts
        //        .SingleOrDefaultAsync(m => m.Id == id);
        //    if (contact == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(contact);
        //}

        // GET: Contacts/Create
        //public IActionResult Create()
        //{
        //    return View();
        //}

        // POST: Contacts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<string> Create([FromBody] Contact contact)
        {
            try
            {
                _context.Add(contact);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                
            }
            return "OK";
            // return RedirectToAction("Index");
            // return View(contact);
        }

        // GET: Contacts/Edit/5
        //public async Task Edit(int? id)
        //{
        //    if (id == null)
        //    {
        //       // return NotFound();
        //    }

        //    var contact = await _context.Contacts.SingleOrDefaultAsync(m => m.Id == id);
        //    if (contact == null)
        //    {
        //        //return NotFound();
        //    }
        //    //return View(contact);
        //}

        // POST: Contacts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut]
        public async Task<string> Edit([FromBody] Contact contact)
        {
           /* if (id != contact.Id)
            {
               // return NotFound();
            }*/

           // if (ModelState.IsValid)
          //  {
                try
                {
                    _context.Update(contact);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ContactExists(contact.Id))
                    {
                        return "Not contact exist!";
                        //return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            return "OK";
            // return RedirectToAction("Index");
            // }
            // return View(contact);
        }

        // GET: Contacts/Delete/5
        //public async Task<IActionResult> Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return NotFound();
        //    }

        //    var contact = await _context.Contacts
        //        .SingleOrDefaultAsync(m => m.Id == id);
        //    if (contact == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(contact);
        //}

        // POST: Contacts/Delete/5
        [HttpDelete]
        public async Task DeleteConfirmed(int id)
        {
            var contact = await _context.Contacts.SingleOrDefaultAsync(m => m.Id == id);
            _context.Contacts.Remove(contact);
            await _context.SaveChangesAsync();
            //return RedirectToAction("Index");
        }

        private bool ContactExists(int id)
        {
            return _context.Contacts.Any(e => e.Id == id);
        }
    }
}
