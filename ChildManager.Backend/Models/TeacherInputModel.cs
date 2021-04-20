using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChildManager.Models
{
    public class TeacherInputModel
    {
        [Required]
        public string Name { get; set; }
        public string LastName { get; set; }
        [Phone]
        public string PhoneNumber { get; set; }
        [EmailAddress]
        public string Email { get; set; }
    }
}
