using System;

namespace ChildManager.Models
{
    public class LessonPlanInputModel
    {
        public int ClassId { get; set; }
        public int TeacherId { get; set; }
        public int SubjectId { get; set; }
        public DayOfWeek DayOfWeek { get; set; }
        public DateTime LessonStart { get; set; }
        public DateTime LessonStop { get; set; }
    }
}
