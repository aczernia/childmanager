using ChildManager.Models;
using System.Collections.Generic;

namespace ChildManager.Services
{
    public interface IAbsenceService
    {
        List<AbsenceOutputModel> GetAbsencesForClass(int classId);
    }
    public class AbsenceService : IAbsenceService
    {
        public List<AbsenceOutputModel> GetAbsencesForClass(int classId)
        {
            throw new System.NotImplementedException();
        }
    }
}
