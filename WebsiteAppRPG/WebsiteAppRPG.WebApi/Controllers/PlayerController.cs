using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.WebsiteAppRPG.Application;
using WebsiteAppRPG.WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/players")]
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

        [HttpPost("/apis/players/{id}")]
        public IActionResult UpdatePlayerPosition(int id, [FromBody] PlayerPosition position) 
        {
            List<Player> players = _gameService.GetPlayers();

            Player? player = players.First(x => x.PlayerID == id);

            if (player != null)
            {
                player.PositionX = position.X;
                player.PositionY = position.Y;
                _gameService.Save();
            }

            return Ok(player);
        }

    }
}
