using ChildManager.Entities;
using ChildManager.Models;
using System.Collections.Generic;
using System.Linq;

namespace ChildManager.Services
{
    public interface ILessonService
    {
        void AddLesson(LessonInputModel lessonInputModel);
        List<LessonOutputModel> GetLessonsByTeacherClass(int classId, int teacherId);
    }
    public class LessonService : ILessonService
    {
        private readonly ChildManagerDbContext _dbContext;
        public LessonService(ChildManagerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void AddLesson(LessonInputModel lessonInputModel)
        {
            var lessonEntity = new Lesson()
            {
                BeginDate = lessonInputModel.BeginDate,
                ClassId = lessonInputModel.ClassId,
                EndDate = lessonInputModel.EndDate,
                SubjectId = lessonInputModel.SubjectId,
                TeacherId = lessonInputModel.TeacherId,
                Topic = lessonInputModel.Topic,
            };

            var allStudentsFromClass = _dbContext
                .Students
                .Where(a => a.ClassId == lessonInputModel.ClassId);

            var notPresentsStudents = allStudentsFromClass
                .Where(a => !lessonInputModel.WasPresentsStudentsIds.Contains(a.Id));

            _dbContext.Lessons.Add(lessonEntity);
            _dbContext.SaveChanges();

            foreach(var student in allStudentsFromClass)
            {
                var absence = new Absence()
                {
                    LessonId = lessonEntity.Id,
                    StudentId = student.Id,
                    WasPresent = !notPresentsStudents.Select(a => a.Id).Contains(student.Id),
                    Justified = null
                };
                _dbContext.Absences.Add(absence);
            }
            _dbContext.SaveChanges();
        }

        public List<LessonOutputModel> GetLessonsByTeacherClass(int classId, int teacherId)
        {
            var items = _dbContext.Lessons.Where(a => a.ClassId == classId && a.TeacherId == teacherId);
            return items.Select(a => new LessonOutputModel()
            {
                Topic = a.Topic,
                DateBegin = a.BeginDate,
                DateEnd = a.EndDate
            }).ToList();
        }
    }
}
