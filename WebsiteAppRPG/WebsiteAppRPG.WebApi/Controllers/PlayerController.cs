using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.WebsiteAppRPG.Application;
using WebsiteAppRPG.WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("api/players")]
    public class PlayerController : ControllerBase
    {
        private readonly GameService _gameService;

        public PlayerController()
        {
            _gameService = new();
        }

        [HttpGet]
        public IActionResult GetPlayers()
        {
            return Ok(_gameService.GetPlayers());
        }

    }
}
