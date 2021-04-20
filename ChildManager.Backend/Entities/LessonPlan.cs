using System;

namespace ChildManager.Entities
{
    public class LessonPlan
    {
        public int Id { get; set; }
        public int ClassId { get; set; }
        public int SubjectId { get; set; }
        public int TeacherId { get; set; }
        public DayOfWeek DayOfWeek { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        
        public virtual Class Class { get; set; }
        public virtual Subject Subject { get; set; }
        public virtual Teacher Teacher { get; set; }
    }
}
