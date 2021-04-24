using System.Collections.Generic;

namespace ChildManager.Entities
{
    public class Class
    {
        public int Id { get; set; }
        public string ClassName { get; set; }
        public virtual List<Student> Students { get; set; }
        public virtual List<Teacher> Teachers { get; set; }
    }
}
