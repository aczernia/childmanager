using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChildManager.Entities
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Pesel { get; set; }
        public DateTime BirthDate { get; set; }

        public Class Class { get; set; }
        public Journal Journal { get; set; }
    }
}
