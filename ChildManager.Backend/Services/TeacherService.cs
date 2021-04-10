using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;
using AutoMapper;
using AutoMapper.Configuration.Annotations;
using ChildManager.Entities;
using ChildManager.Models;
using Microsoft.AspNetCore.Connections.Features;

namespace ChildManager.Services
{
    public interface ITeacherService
    {
        TeacherOutputModel GetById(int id);
        IEnumerable<TeacherOutputModel> GetAll();
        int Create(TeacherInputModel dto);
        bool Update(int id, TeacherInputModel dto);
        bool Delete(int id);
    }

    public class TeacherService : ITeacherService
    {
        private readonly ChildManagerDbContext _dbContext;

        public TeacherService(ChildManagerDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        public bool Update(int id, TeacherInputModel dto)
        {
            var teacher = _dbContext.Teachers.FirstOrDefault(x => x.Id == id);

            if (teacher is null) return false;

            teacher.Name = dto.Name;
            teacher.LastName = dto.LastName;
            teacher.Email = dto.Email;
            teacher.PhoneNumber = dto.PhoneNumber;

            _dbContext.SaveChanges();
            return true;

        }

        public bool Delete(int id)
        {
            var teacher = _dbContext.Teachers.FirstOrDefault(x => x.Id == id);

            if (teacher is null) return false;

            _dbContext.Teachers.Remove(teacher);
            _dbContext.SaveChanges();

            return true;

        }
        public TeacherOutputModel GetById(int id)
        {
            var teacher = _dbContext
                .Teachers
                .FirstOrDefault(x => x.Id == id);

            if (teacher is null) return null;
            return new TeacherOutputModel()
            {
                Email = teacher.Email,
                LastName = teacher.LastName,
                Name = teacher.Name,
                Id = teacher.Id,
                PhoneNumber = teacher.PhoneNumber
            };
        }
        public IEnumerable<TeacherOutputModel> GetAll()
        {
            var teachers = _dbContext
                .Teachers
                .ToList();

            return teachers.Select(a => new TeacherOutputModel()
            {
                Email = a.Email,
                LastName = a.LastName,
                Name = a.Name,
                Id = a.Id,
                PhoneNumber = a.PhoneNumber
            }).ToList();
        }


        public int Create(TeacherInputModel dto)
        {
            var teacher = new Teacher()
            {
                PhoneNumber = dto.PhoneNumber,
                LastName = dto.LastName,
                Email = dto.Email,
                Name = dto.Name,
            };

            _dbContext.Teachers.Add(teacher);
            _dbContext.SaveChanges();

            return teacher.Id;
        }
    }
}
