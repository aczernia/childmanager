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
        TeacherDto GetById(int id);
        IEnumerable<TeacherDto> GetAll();
        int Create(CreateTeacherDto dto);
        bool Update(int id, UpdateTeacherDto dto);
        bool Delete(int id);
    }
    public class TeacherService : ITeacherService
    {
        private readonly ChildManagerDbContext _dbContext;
        private readonly IMapper _mapper;



        public TeacherService(ChildManagerDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }


        public bool Update(int id, UpdateTeacherDto dto)
        {
            var teacher = _dbContext.Teachers.FirstOrDefault(x => x.Id == id);

            if (teacher is null) return false;

            teacher.Name = dto.Name;
            teacher.LastName = dto.LastName;
            teacher.Email = dto.Email;
            teacher.TelNumber = dto.TelNumber;

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
        public TeacherDto GetById(int id)
        {
            var teacher = _dbContext
                .Teachers
                .FirstOrDefault(x => x.Id == id);

            if (teacher is null) return null;

            var resault = _mapper.Map<TeacherDto>(teacher);
            return resault;
        }
        public IEnumerable<TeacherDto> GetAll()
        {
            var teachers = _dbContext
                .Teachers
                .ToList();

            var teachersDto = _mapper.Map<List<TeacherDto>>(teachers);
            return teachersDto;
        }


        public int Create(CreateTeacherDto dto)
        {
            var teacher = _mapper.Map<Teacher>(dto);

            _dbContext.Teachers.Add(teacher);
            _dbContext.SaveChanges();

            return teacher.Id;
        }
    }
}
