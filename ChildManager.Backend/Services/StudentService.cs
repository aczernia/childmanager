using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ChildManager.Entities;
using ChildManager.Models;
using Microsoft.EntityFrameworkCore;

namespace ChildManager.Services
{
    public interface IStudentService
    {
        StudentOutputModel GetById(int id);
        IEnumerable<StudentOutputModel> GetAll();
        int Create(StudentInputModel dto);
        bool Delete(int id);
        bool Update(int id, StudentInputModel dto);
    }

    public class StudentService : IStudentService
    {
        private readonly ChildManagerDbContext _dbContext;

        public StudentService(ChildManagerDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
        }

        public bool Update(int id, StudentInputModel inputModel)
        {
            var student = _dbContext
                .Students
                .FirstOrDefault(x => x.Id == id);


            if (student is null)
                return false;

            student.Name = inputModel.Name;
            student.LastName = inputModel.LastName;
            student.BirthDate = inputModel.BirthDate;
            student.Pesel = inputModel.Pesel;
            student.ClassId = inputModel.ClassId;
            _dbContext.SaveChanges();

            return true;

        }

        public StudentOutputModel GetById(int id)
        {
            var student = _dbContext.Students.Include(x => x.Class).FirstOrDefault(r => r.Id == id);

            if (student is null) return null;


            return new StudentOutputModel()
            {
                Id = student.Id,
                Name = student.Name,
                LastName = student.LastName,
                BirthDate = student.BirthDate,
                Pesel = student.Pesel,
                Class = student.Class.ClassName
            };
        }

        public IEnumerable<StudentOutputModel> GetAll()
        {
            var students = _dbContext
                .Students.Include(x => x.Class).ToList();

            return students.Select(a => new StudentOutputModel()
            {
                Id = a.Id,
                Name = a.Name,
                LastName = a.LastName,
                BirthDate = a.BirthDate,
                Pesel = a.Pesel,
                Class = a.Class.ClassName
            }).ToList();
        }

        public int Create(StudentInputModel dto)
        {
            var student = new Student()
            {
                LastName = dto.LastName,
                Name = dto.Name,
                Pesel = dto.Pesel,
                BirthDate = dto.BirthDate,
                ClassId = dto.ClassId
            };
            _dbContext.Students.Add(student);
            _dbContext.SaveChanges();

            return student.Id;
        }

        public bool Delete (int id)
        {
            var student = _dbContext
                .Students
                .FirstOrDefault(r => r.Id == id);

            if (student is null) return false;
            
                _dbContext.Students.Remove(student);
                _dbContext.SaveChanges();

                return true;
        }
    }
}
