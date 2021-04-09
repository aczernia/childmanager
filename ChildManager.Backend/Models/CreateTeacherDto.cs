using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChildManager.Models
{
    public class CreateTeacherDto
    {
        [Required]
        public string Name { get; set; }
        public string LastName { get; set; }
        [Phone]
        public string TelNumber { get; set; }
        [EmailAddress]
        public string Email { get; set; }
    }
}
