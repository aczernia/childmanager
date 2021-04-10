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

namespace ChildManager.Controllers
{
    [Route("api/student")]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;
        

        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }
        [HttpPut]
        public ActionResult Update([FromBody] StudentInputModel dto, [FromBody] int id)
        {
            if (ModelState.IsValid)
            {
                return BadRequest(ModelState);  
            }

            var isUpdate = _studentService.Update(id, dto);

            if (!isUpdate)
            {
                return NotFound();
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            var isDelete = _studentService.Delete(id);

            if (isDelete)
            {
                return NoContent();
            }

            return NotFound();
        }
        public ActionResult<IEnumerable<StudentOutputModel>> GetAll()
        {

            var studentDto = _studentService.GetAll();

            return Ok(studentDto);
        }

        [HttpGet("{id}")]
        public ActionResult<StudentOutputModel> Get([FromRoute] int id)
        {
            var student = _studentService.GetById(id);

            if (student is null)
            {
                return NotFound();
            }

         
            return Ok(student);
        }

        [HttpPost]
        public ActionResult CreatStudent([FromBody] StudentInputModel dto)
        {
          var id =  _studentService.Create(dto);
            
            return Created($"api/student/{id}", null);
        }
    }
}
