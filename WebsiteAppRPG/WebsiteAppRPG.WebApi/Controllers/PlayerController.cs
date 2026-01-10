using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.WebsiteAppRPG.Application;
using WebsiteAppRPG.WebsiteAppRPG.Core.Entities;

namespace WebsiteAppRPG.WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlayerController : ControllerBase
    {
        private readonly GameService _gameService;

        public PlayerController(GameService gameService)
        {
            _gameService = gameService;
        }

        [HttpGet]
        public IActionResult GetPlayers()
        {
            return Ok(_gameService.GetPlayers());
        }

    }
}
