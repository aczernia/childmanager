using AutoMapper;
using ChildManager.Entities;
using ChildManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChildManager.Services
{
    public interface IClassService
    {
        ClassOutputModel GetById(int id);
        IEnumerable<ClassOutputModel> GetAll();
        int Create(ClassInputModel dto);
        bool Update(int id, ClassInputModel dto);
        bool Delete(int id);
    }

    public class ClassService : IClassService
    {
        private readonly ChildManagerDbContext _dbContext;
        private readonly IMapper _mapper;

        public ClassService(ChildManagerDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public bool Update(int id, ClassInputModel inputModel)
        {
            var student = _dbContext
                .Classes
                .FirstOrDefault(x => x.Id == id);


            if (student is null)
                return false;

            student.ClassName = inputModel.Name;

            _dbContext.SaveChanges();

            return true;

        }

        public ClassOutputModel GetById(int id)
        {
            var classEntity = _dbContext.Classes.FirstOrDefault(a => a.Id == id);

            if (classEntity is null) return null;


            var result = _mapper.Map<ClassOutputModel>(classEntity);

            return result;

        }

        public IEnumerable<ClassOutputModel> GetAll()
        {
            var classes = _dbContext
                .Classes.ToList();

            return classes.Select(a => new ClassOutputModel()
            {
                Name = a.ClassName
            }).ToList();
        }

        public int Create(ClassInputModel dto)
        {
            var classEntity = new Class()
            {
                ClassName = dto.Name
            };
            _dbContext.Classes.Add(classEntity);
            _dbContext.SaveChanges();

            return classEntity.Id;
        }

        public bool Delete(int id)
        {
            var classEntity = _dbContext
                .Classes
                .FirstOrDefault(r => r.Id == id);

            if (classEntity is null) return false;

            _dbContext.Classes.Remove(classEntity);
            _dbContext.SaveChanges();

            return true;

        }
    }
}
