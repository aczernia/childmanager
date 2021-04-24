namespace ChildManager.Entities
{
    public class Absence
    {
        public int Id { get; set; }
        public int LessonId { get; set; }
        public int StudentId { get; set; }
        public bool WasPresent { get; set; }
        public bool? Justified { get; set; }

        public Lesson Lesson { get; set; }
        public Student Student { get; set; }
    }
}
