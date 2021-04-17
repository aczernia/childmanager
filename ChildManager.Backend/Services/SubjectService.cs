using AutoMapper;
using ChildManager.Entities;
using ChildManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace ChildManager.Services
{
    public interface ISubjectService
    {
        SubjectOutputModel GetById(int id);
        IEnumerable<SubjectOutputModel> GetAll();
        int Create(SubjectInputModel dto);
        bool Delete(int id);
        bool Update(int id, SubjectInputModel dto);

        IEnumerable<SubjectOutputModel> GetSubjectsForTeacher(int teacherId);
    }

    public class SubjectService : ISubjectService
    {
        private readonly ChildManagerDbContext _dbContext;
        public SubjectService(ChildManagerDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
        }
        public int Create(SubjectInputModel dto)
        {
            var subject = new Subject()
            {
                Name = dto.Name,
                TeacherId = dto.TeacherId
            };
            _dbContext.Subjects.Add(subject);
            _dbContext.SaveChanges();

            return subject.Id;
        }

        public bool Delete(int id)
        {
            var subject = _dbContext
                .Subjects
                .FirstOrDefault(r => r.Id == id);

            if (subject is null) return false;

            _dbContext.Subjects.Remove(subject);
            _dbContext.SaveChanges();

            return true;
        }

        public IEnumerable<SubjectOutputModel> GetAll()
        {
            var items = _dbContext.Subjects
                .Include(a => a.Teacher)
                .Select(a => new SubjectOutputModel()
                {
                    Id = a.Id,
                    Name = a.Name,
                    Teacher = new TeacherOutputModel()
                    {
                        Id = a.Teacher.Id,
                        Name = a.Teacher.Name,
                        Email = a.Teacher.Name,
                        LastName = a.Teacher.LastName,
                        PhoneNumber = a.Teacher.PhoneNumber
                    }
                }).ToList();
            return items;
        }

        public SubjectOutputModel GetById(int id)
        {
            var item = _dbContext.Subjects
                .Include(a => a.Teacher)
                .Select(a => new SubjectOutputModel()
                {
                    Id = a.Id,
                    Name = a.Name,
                    Teacher = new TeacherOutputModel()
                    {
                        Id = a.Teacher.Id,
                        Name = a.Teacher.Name,
                        Email = a.Teacher.Name,
                        LastName = a.Teacher.LastName,
                        PhoneNumber = a.Teacher.PhoneNumber
                    }
                }).FirstOrDefault(a => a.Id == id);
            return item;
        }

        public IEnumerable<SubjectOutputModel> GetSubjectsForTeacher(int teacherId)
        {
            var items = _dbContext.Subjects
                .Include(a => a.Teacher)
                .Where(a => a.TeacherId == teacherId)
                .Select(a => new SubjectOutputModel()
                {
                    Id = a.Id,
                    Name = a.Name,
                    Teacher = new TeacherOutputModel()
                    {
                        Id = a.Teacher.Id,
                        Name = a.Teacher.Name,
                        Email = a.Teacher.Name,
                        LastName = a.Teacher.LastName,
                        PhoneNumber = a.Teacher.PhoneNumber
                    }
                }).ToList();
            return items;
        }

        public bool Update(int id, SubjectInputModel dto)
        {
            var subject = _dbContext
                .Subjects
                .FirstOrDefault(x => x.Id == id);


            if (subject is null)
                return false;

            subject.Name = dto.Name;
            subject.TeacherId = dto.TeacherId;
            _dbContext.SaveChanges();

            return true;
        }
    }
}
