using ChildManager.Entities;
using ChildManager.Exceptions;
using ChildManager.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ChildManager.Services
{
    public interface ILessonPlanService
    {
        int AddLessonPlan(LessonPlanInputModel dto);
        IEnumerable<LessonPlanOutputModel> GetLessonPlanForClass(int classId);
        LessonPlanOutputModel GetCurrentForTeacher(int teacherId);
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

        public LessonPlanOutputModel GetCurrentForTeacher(int teacherId)
        {
            var currentDate = DateTime.Now;
            var currentDateOfWeek = currentDate.DayOfWeek;

                var currentLesson = _dbContext.LessonPlans
                .Include(a => a.Teacher)
                .Include(a => a.Subject)
                .Include(a => a.Class)
                .FirstOrDefault(a => a.DayOfWeek == currentDateOfWeek && a.DateFrom.TimeOfDay < currentDate.TimeOfDay && a.DateTo.TimeOfDay > currentDate.TimeOfDay && a.TeacherId == teacherId);
            if (currentLesson is null)
            {
                throw new ObjectNotFoundException();
            }

            return new LessonPlanOutputModel()
            {
                DayOfWeek = currentLesson.DayOfWeek,
                LessonStart = currentLesson.DateFrom,
                LessonStop = currentLesson.DateTo,
                Class = new ClassOutputModel()
                {
                    Id = currentLesson.Class.Id,
                    Name = currentLesson.Class.ClassName
                },
                Subject = new SubjectOutputModel()
                {
                    Id = currentLesson.Subject.Id,
                    Name = currentLesson.Subject.Name
                },
                Teacher = new TeacherOutputModel()
                {
                    Id = currentLesson.Teacher.Id,
                    Name = currentLesson.Teacher.Name,
                    LastName = currentLesson.Teacher.LastName,
                    Email = currentLesson.Teacher.Email,
                    PhoneNumber = currentLesson.Teacher.PhoneNumber
                }
            };
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
