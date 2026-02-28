using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application.CRUD.CharacterOperations;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/characters")]
    public class CharacterController : ControllerBase
    {
        private readonly CharacterReader _characterReader;

        public CharacterController()
        {
            _characterReader = new();
        }

        [HttpGet]
        public IActionResult GetCharacters()
        {
            return Ok(_characterReader.GetCharacters());
        }
    }
}
