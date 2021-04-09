using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChildManager.Models
{
    public class UpdateStudentDto
    {
        [Required]
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Pesel { get; set; }
        public string BirthDate { get; set; }
    }
}
