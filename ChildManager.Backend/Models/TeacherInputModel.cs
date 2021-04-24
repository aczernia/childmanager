using System.ComponentModel.DataAnnotations;

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
        public string Password { get; set; }
    }
}
