using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application.Services.CharacterServices;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/characters")]
    public class CharacterController : ControllerBase
    {
        private readonly CharacterReadService _characterService;

        public CharacterController()
        {
            _characterService = new();
        }

        [HttpGet]
        public IActionResult GetCharacters()
        {
            return Ok(_characterService.GetCharacters());
        }
    }
}
