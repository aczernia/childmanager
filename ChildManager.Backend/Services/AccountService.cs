using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChildManager.Entities;
using ChildManager.Models;
using Microsoft.AspNetCore.Identity;

namespace ChildManager.Services
{
    public interface IAccountService
    {
        void RegisterUser(RegisterUserDto dto);
    }

    public class AccountService : IAccountService
    {
     
        private readonly ChildManagerDbContext _dbContext;
        private readonly IPasswordHasher<User> _passwordHasher;

        public AccountService(ChildManagerDbContext dbContext, IPasswordHasher<User> passwordHasher)
        {
            _dbContext = dbContext;
            _passwordHasher = passwordHasher;
        }
        

        public void RegisterUser(RegisterUserDto dto)
        {

            var newUser = new User()
            {
                Email = dto.Email,
                DateOfBirth = dto.DateOfBirth,
                RoleId = dto.RoleId
            };

            var hashedPassword =  _passwordHasher.HashPassword(newUser, dto.Password);

            newUser.PasswordHash = hashedPassword;
            _dbContext.Users.Add(newUser);
            _dbContext.SaveChanges();
        }
    }
}
