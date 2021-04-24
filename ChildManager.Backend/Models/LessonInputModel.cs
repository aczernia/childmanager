using System;
using System.Collections.Generic;

namespace ChildManager.Models
{
    public class LessonInputModel
    {
        public string Topic { get; set; }
        public int ClassId { get; set; }
        public int TeacherId { get; set; }
        public int SubjectId { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
        public List<int> WasPresentsStudentsIds { get; set; }
    }
}
