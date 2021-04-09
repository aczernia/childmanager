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
        StudentDto GetById(int id);
        IEnumerable<StudentDto> GetAll();
        int Create(CreateStudentDto dto);
        bool Delete(int id);
        bool Update(int id, UpdateStudentDto dto);
    }

    public class StudentService : IStudentService
    {
        private readonly ChildManagerDbContext _dbContext;
        private readonly IMapper _mapper;

        public StudentService(ChildManagerDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public bool Update(int id, UpdateStudentDto dto)
        {
            var student = _dbContext
                .Students
                .FirstOrDefault(x => x.Id == id);


            if (student is null)
                return false;

            student.Name = dto.Name;
            student.LastName = dto.LastName;
            student.BirthDate = dto.BirthDate;
            student.Pesel = dto.Pesel;

            _dbContext.SaveChanges();

            return true;

        }

        public StudentDto GetById(int id)
        {
            var student = _dbContext.Students.Include(x => x.Class).FirstOrDefault(r => r.Id == id);

            if (student is null) return null;


            var result = _mapper.Map<StudentDto>(student);

            return result;

        }

        public IEnumerable<StudentDto> GetAll()
        {
            var students = _dbContext
                .Students.Include(x => x.Class).ToList();

            var studentDtos = _mapper.Map<List<StudentDto>>(students);

            return studentDtos;
        }

        public int Create(CreateStudentDto dto)
        {
            var student = _mapper.Map<Student>(dto);
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
