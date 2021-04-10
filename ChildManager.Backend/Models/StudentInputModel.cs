using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChildManager.Models
{
    public class StudentInputModel
    {
        [Required]
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Pesel { get; set; }
        public DateTime BirthDate { get; set; }

        public int ClassId { get; set; }
    }
}
