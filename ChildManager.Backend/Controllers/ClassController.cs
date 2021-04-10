using ChildManager.Models;
using ChildManager.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace ChildManager.Controllers
{
    [Route("api/class")]
    public class ClassController : ControllerBase
    {
        private readonly IClassService _classService;

        public ClassController(IClassService classService)
        {
            _classService = classService;
        }

        [HttpPut]
        public ActionResult Update([FromBody] ClassInputModel dto, [FromBody] int id)
        {
            if (ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var isUpdate = _classService.Update(id, dto);

            if (!isUpdate)
            {
                return NotFound();
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            var isDelete = _classService.Delete(id);

            if (isDelete)
            {
                return NoContent();
            }

            return NotFound();
        }
        public ActionResult<IEnumerable<ClassOutputModel>> GetAll()
        {

            var classDto = _classService.GetAll();

            return Ok(classDto);
        }

        [HttpGet("{id}")]
        public ActionResult<ClassOutputModel> Get([FromRoute] int id)
        {
            var classEntity = _classService.GetById(id);

            if (classEntity is null)
            {
                return NotFound();
            }


            return Ok(classEntity);
        }

        [HttpPost]
        public ActionResult Post([FromBody] ClassInputModel dto)
        {
            var id = _classService.Create(dto);

            return Created($"api/class/{id}", null);
        }
    }
}
