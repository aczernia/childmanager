using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChildManager.Entities;
using ChildManager.Models;

namespace ChildManager.Services
{
    public interface IAccountService
    {
        void RegisterUser(RegisterUserDto dto);
    }

    public class AccountService : IAccountService
    {
     
        private readonly ChildManagerDbContext _dbContext;

        public AccountService(ChildManagerDbContext dbContext )
        {
            _dbContext = dbContext;
        }
        

        public void RegisterUser(RegisterUserDto dto)
        {

            var newUser = new User()
            {
                Email = dto.Email,
                DateOfBirth = dto.DateOfBirth,
                RoleId = dto.RoleId
            };

            _dbContext.Users.Add(newUser);
            _dbContext.SaveChanges();
        }
    }
}
