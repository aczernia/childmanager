using System.Collections.Generic;

namespace ChildManager.Models
{
    public class StudentAbsencesOutputModel : StudentOutputModel
    {
        public List<AbsenceOutputModel> Absences { get; set; }
    }
}
