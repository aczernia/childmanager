using ChildManager.Entities;
using ChildManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace ChildManager.Services
{
    public interface IAbsenceService
    {
        List<AbsenceOutputModel> GetAbsencesForStudent(int studentId);
        void JustifyAbsence(int absenceId);
    }
    public class AbsenceService : IAbsenceService
    {
        private readonly ChildManagerDbContext _dbContext;
        public AbsenceService(ChildManagerDbContext context)
        {
            _dbContext = context;
        }

        public List<AbsenceOutputModel> GetAbsencesForStudent(int studentId)
        {
            var absences = _dbContext
                .Absences
                .Include(a => a.Lesson)
                .Where(a => a.StudentId == studentId)
                .ToList();
            return absences.Select(a => new AbsenceOutputModel()
            {
                Date = a.Lesson.BeginDate,
                Id = a.Id,
                Justified = a.Justified ?? false
            }).ToList();
        }

        public void JustifyAbsence(int absenceId)
        {
            var absence = _dbContext.Absences.FirstOrDefault(a => a.Id == absenceId);
            absence.Justified = true;
            _dbContext.Absences.Update(absence);
            _dbContext.SaveChanges();
        }
    }
}
