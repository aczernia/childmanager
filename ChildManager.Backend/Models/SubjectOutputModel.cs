namespace ChildManager.Models
{
    public class SubjectOutputModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public TeacherOutputModel Teacher { get; set; }
    }
}
