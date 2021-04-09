using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChildManager.Entities
{
    public class Journal
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public int FinalGrades { get; set; }
        public virtual List<Student> Students { get; set; }
        public virtual List<Teacher> Teachers { get; set; }
    }
}
