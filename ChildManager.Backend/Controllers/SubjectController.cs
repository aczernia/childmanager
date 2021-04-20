using System.Collections.Generic;
using ChildManager.Models;
using ChildManager.Services;
using Microsoft.AspNetCore.Mvc;

namespace ChildManager.Controllers
{
    [Route("api/subject")]
    public class SubjectController : ControllerBase
    {
        private readonly ISubjectService _subjectService;

        public SubjectController(ISubjectService subjectService)
        {
            _subjectService = subjectService;
        }

        [HttpPut("{id}")]
        public ActionResult Update([FromBody] SubjectInputModel dto, [FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var isUpdate = _subjectService.Update(id, dto);
            if (!isUpdate)
            {
                return NotFound();
            }


            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute]int id)
        {
            var isDelete = _subjectService.Delete(id);
            if (isDelete)
            {
                return NoContent();
            }

            return NotFound();
        }

        [HttpPost]
        public ActionResult CreateSubject([FromBody] SubjectInputModel dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var id = _subjectService.Create(dto);
            return Created($"api/subject/{id}", null);
        }


        [HttpGet]
        public ActionResult<IEnumerable<SubjectOutputModel>> GetAll()
        {
            var teacherDto = _subjectService.GetAll();

            return Ok(teacherDto);
        }

        [HttpGet("{id}")]
        public ActionResult<SubjectOutputModel> Get([FromRoute] int id)
        {
            var teacher = _subjectService.GetById(id);

            if (teacher is null)
            {
                return NotFound();
            }

            return Ok(teacher);
        }
    }
}
