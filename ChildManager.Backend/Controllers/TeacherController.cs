using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ChildManager.Entities;
using ChildManager.Models;
using ChildManager.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CreateTeacherDto = ChildManager.Models.CreateTeacherDto;

namespace ChildManager.Controllers
{
    [Route("api/childManager/teacher")]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherService _teacherService;



        public TeacherController(ITeacherService teacherService)
        {
            _teacherService = teacherService;
        }

        [HttpPut("{id}")]
        public ActionResult Update([FromBody] UpdateTeacherDto dto, [FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var isUpdate = _teacherService.Update(id, dto);
            if (!isUpdate)
            {
                return NotFound();
            }


            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute]int id)
        {
            var isDelete = _teacherService.Delete(id);
            if (isDelete)
            {
                return NoContent();
            }

            return NotFound();
        }

        [HttpPost]
        public ActionResult CreatTeacher([FromBody] CreateTeacherDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var id = _teacherService.Create(dto);
            return Created($"/api/childmanager/teacher/{id}", null);
        }


        [HttpGet]
        public ActionResult<IEnumerable<TeacherDto>> GetAll()
        {
            var teacherDto = _teacherService.GetAll();

            return Ok(teacherDto);
        }

        [HttpGet("{id}")]
        public ActionResult<TeacherDto> Get([FromRoute] int id)
        {
            var teacher = _teacherService.GetById(id);

            if (teacher is null)
            {
                return NotFound();
            }

            return Ok(teacher);
        }
    }
}
