using ChildManager.Entities;
using ChildManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace ChildManager.Services
{
    public interface ILessonPlanService
    {
        int AddLessonPlan(LessonPlanInputModel dto);
        IEnumerable<LessonPlanOutputModel> GetLessonPlanForClass(int classId);
    }
    public class LessonPlanService : ILessonPlanService
    {
        private readonly ChildManagerDbContext _dbContext;

        public LessonPlanService(ChildManagerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int AddLessonPlan(LessonPlanInputModel dto)
        {
            var entity = new LessonPlan()
            {
                ClassId = dto.ClassId,
                DateFrom = dto.LessonStart,
                DateTo = dto.LessonStop,
                DayOfWeek = dto.DayOfWeek,
                SubjectId = dto.SubjectId,
                TeacherId = dto.TeacherId
            };
            _dbContext.LessonPlans.Add(entity);
            _dbContext.SaveChanges();
            return entity.Id;
        }

        public IEnumerable<LessonPlanOutputModel> GetLessonPlanForClass(int classId)
        {
            return _dbContext.LessonPlans
                .Where(a => a.ClassId == classId)
                .Include(a => a.Teacher)
                .Include(a => a.Subject)
                .Select(a => new LessonPlanOutputModel()
                {
                    DayOfWeek = a.DayOfWeek,
                    LessonStart = a.DateFrom,
                    LessonStop = a.DateTo,
                    Subject = new SubjectOutputModel()
                    {
                        Id = a.Subject.Id,
                        Name = a.Subject.Name
                    },
                    Teacher = new TeacherOutputModel()
                    {
                        Id = a.Teacher.Id,
                        Name = a.Teacher.Name,
                        LastName = a.Teacher.LastName,
                        Email = a.Teacher.Email,
                        PhoneNumber = a.Teacher.PhoneNumber
                    }
                }).ToList();
        }
    }
}
