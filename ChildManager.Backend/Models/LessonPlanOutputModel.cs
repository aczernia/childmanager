using System;

namespace ChildManager.Models
{
    public class LessonPlanOutputModel
    {
        public TeacherOutputModel Teacher { get; set; }
        public SubjectOutputModel Subject { get; set; }
        public ClassOutputModel Class { get; set; }
        public DayOfWeek DayOfWeek { get; set; }
        public DateTime LessonStart { get; set; }
        public DateTime LessonStop { get; set; }
    }
}
