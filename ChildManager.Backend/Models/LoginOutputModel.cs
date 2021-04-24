namespace ChildManager.Models
{
    public class LoginOutputModel
    {
        public string Token { get; set; }
        public bool IsAdmin { get; set; }
        public int? EducatorClassId { get; set; }
        public int TeacherId { get; set; }
    }
}
