using ChildManager.Services;
using Microsoft.AspNetCore.Mvc;

namespace ChildManager.Controllers
{
    [Route("api/absence")]
    public class AbsenceController : Controller
    {
        private readonly IAbsenceService _absenceService;
        public AbsenceController(IAbsenceService absenceService)
        {
            _absenceService = absenceService;
        }

        [HttpGet("student/{studentId:int}")]
        public IActionResult Get(int studentId)
        {
            return Ok(_absenceService.GetAbsencesForStudent(studentId));
        }

        [HttpPut("justify/{absenceId:int}")]
        public IActionResult JustifyAbsence(int absenceId)
        {
            _absenceService.JustifyAbsence(absenceId);
            return Ok();
        }
    }
}
