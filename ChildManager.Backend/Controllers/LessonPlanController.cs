using ChildManager.Models;
using ChildManager.Services;
using Microsoft.AspNetCore.Mvc;

namespace ChildManager.Controllers
{
    [ApiController]
    [Route("api/lesson-plan")]
    public class LessonPlanController : ControllerBase
    {
        private readonly ILessonPlanService _lessonPlanService;
        public LessonPlanController(ILessonPlanService lessonPlanService)
        {
            _lessonPlanService = lessonPlanService;
        }
        
        [HttpPost]
        public IActionResult Post(LessonPlanInputModel lessonPlanInputModel)
        {
            _lessonPlanService.AddLessonPlan(lessonPlanInputModel);
            return Ok();
        }

        [HttpGet("{classId:int}")]
        public IActionResult GetForClass(int classId)
        {
            return Ok(_lessonPlanService.GetLessonPlanForClass(classId));
        }
    }
}
