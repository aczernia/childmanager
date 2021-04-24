using System;

namespace ChildManager.Entities
{
    public class Lesson
    {
        public int Id { get; set; }
        public string Topic { get; set; }
        public int ClassId { get; set; }
        public int TeacherId { get; set; }
        public int SubjectId { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }

        public virtual Class Class { get; set; }
        public virtual Teacher Teacher { get; set; }
        public virtual Subject Subject { get; set; }
    }
}
