using ChildManager.Models;
using ChildManager.Services;
using Microsoft.AspNetCore.Mvc;

namespace ChildManager.Controllers
{
    [ApiController]
    [Route("api/lesson")]
    public class LessonsController : Controller
    {
        private readonly ILessonService _lessonService;
        public LessonsController(ILessonService lessonService)
        {
            _lessonService = lessonService;
        }

        [HttpPost]
        public IActionResult Post(LessonInputModel lessonInputModel)
        {
            _lessonService.AddLesson(lessonInputModel);
            return Ok();
        }

        [HttpGet]
        public IActionResult Get([FromQuery] int teacherId, [FromQuery] int classId) 
        {
            return Ok(_lessonService.GetLessonsByTeacherClass(classId, teacherId));
        }
    }
}
