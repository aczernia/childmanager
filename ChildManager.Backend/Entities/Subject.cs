namespace ChildManager.Entities
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int TeacherId { get; set; }

        public virtual Teacher Teacher { get; set; }
    }
}
