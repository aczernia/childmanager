using ChildManager.Models;
using ChildManager.Services;
using Microsoft.AspNetCore.Mvc;

namespace ChildManager.Controllers
{
    [Route("api/authorization")]
    [ApiController]
    public class AuthorizationController : Controller
    {
        private readonly IAuthorizationService _authorizationService;
        public AuthorizationController(IAuthorizationService authorizationService)
        {
            _authorizationService = authorizationService;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginInputModel login)
        {
            var loginResult = _authorizationService.HandleLogin(login);
            return Ok(loginResult);
        }
    }
}
