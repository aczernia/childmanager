using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using ChildManager.Entities;

namespace ChildManager.Services
{
    public class UpdateTeacherDto
    {
        [Required]
        public string Name { get; set; }
        public string LastName { get; set; }
        public string TelNumber { get; set; }
        public string Email { get; set; }
        public Class Class { get; set; }

        public Journal Journal { get; set; }
    }
}
