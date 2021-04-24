using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using ChildManager.Entities;
using ChildManager.Enums;
using ChildManager.Exceptions;
using ChildManager.Models;
using Microsoft.IdentityModel.Tokens;

namespace ChildManager.Services
{
    public interface IAuthorizationService
    {
        LoginOutputModel HandleLogin(LoginInputModel loginInputModel);
    }

    public class AuthorizationService : IAuthorizationService
    {
        private readonly ChildManagerDbContext _dbContext;
        private readonly AuthenticationSettings _authenticationSettings;

        public AuthorizationService(ChildManagerDbContext dbContext, AuthenticationSettings authenticationSettings)
        {
            _dbContext = dbContext;
            _authenticationSettings = authenticationSettings;
        }
        private string GenerateJwt(Teacher teacher, LoginInputModel dto)
        {
            if (teacher is null)
            {
                throw new BadRequestException("Invalid username or password");
            }

            var result = teacher.Password == dto.Password;
            if (!result)
            {
                throw new BadRequestException("Invalid username or password");
            }

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, teacher.Id.ToString()),
                new Claim(ClaimTypes.Name, $"{teacher.Name}{teacher.LastName}"),
                new Claim(ClaimTypes.Role, RoleEnum.Teacher.ToString()),
            };

            if (teacher.IsAdmin)
            {
                claims.Add(new Claim(ClaimTypes.Role, RoleEnum.Admin.ToString()));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authenticationSettings.JwtKey));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(_authenticationSettings.JwtExpireDays);

            var token = new JwtSecurityToken(_authenticationSettings.JwtIssuer,
                _authenticationSettings.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: cred);

            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
        }

        public LoginOutputModel HandleLogin(LoginInputModel loginInputModel)
        {
            var teacher = _dbContext.Teachers.FirstOrDefault(a => a.Email == loginInputModel.Email);
            var token = GenerateJwt(teacher, loginInputModel);
            
            return new LoginOutputModel()
            {
                Token = token,
                IsAdmin = teacher.IsAdmin,
                EducatorClassId = teacher.ClassId,
                TeacherId = teacher.Id
            };
        }
    }
}
