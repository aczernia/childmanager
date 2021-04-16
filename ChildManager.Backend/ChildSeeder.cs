using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChildManager.Entities;

namespace ChildManager
{
    public class ChildSeeder
    {
        private readonly ChildManagerDbContext _dbContext;


        public ChildSeeder(ChildManagerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Seed()
        {
            if (_dbContext.Database.CanConnect())
            {
                if (!_dbContext.Roles.Any())
                {
                    var roles = GetRoles();
                    _dbContext.Roles.AddRange(roles);
                    _dbContext.SaveChanges();

                }
            }
        }


        private IEnumerable<Role> GetRoles()
        {
            var roles = new List<Role>()
            {
                new Role()
                {
                    Name = "User"
                },
                new Role()
                {
                    Name = "Teacher"
                },
                new Role()
                {
                    Name = "Admin"
                }
            };
            return roles;
        }
    }

}
