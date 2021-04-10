using ChildManager.Models;
using ChildManager.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ChildManager.Controllers
{
    [Route("api/class/{id:int}/student")]
    [ApiController]
    public class ClassStudentController : ControllerBase
    {
        private readonly IStudentService _studentService;
        public ClassStudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<StudentOutputModel>> Get(int id)
        {

            var studentDto = _studentService.GetStudentsFromClass(id);

            return Ok(studentDto);
        }
    }
}
