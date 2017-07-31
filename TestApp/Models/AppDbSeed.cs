using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestApp.Models
{
    public class AppDbSeed
    {
        private AppDbContext _context;

        public AppDbSeed(AppDbContext context)
        {
            _context = context;
        }

        public async Task SeedData()
        {
            if (!_context.Contacts.Any())
            {
                var contact = new Contact()
                {
                    Email = @"petrenkotaras@gmail.com",
                    Name = @"Тарас",
                    Surname = @"Петренко",
                    PhoneNumber = @"+380981234567"
                };

                _context.Contacts.Add(contact);
                await _context.SaveChangesAsync();
            }
        }
    }
}
