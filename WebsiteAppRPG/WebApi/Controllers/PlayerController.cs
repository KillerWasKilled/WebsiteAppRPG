using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata;
using WebsiteAppRPG.Application;
using WebsiteAppRPG.Application.Services.PlayerServices;
using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/players")]
    public class PlayerController : ControllerBase
    {
        private readonly GameService _gameService;

        private readonly PlayerCreateService _playerCreateService;
        private readonly PlayerReadService _playerReadService;

        public record NewPlayerRequest(string Email, string Name, string Password);

        public PlayerController()
        {
            _gameService = new();
            _playerCreateService = new();
            _playerReadService = new();
        }

        [HttpPost("/apis/players")]
        public IActionResult CreatePlayer([FromBody] NewPlayerRequest request)
        {
            _playerCreateService.CreatePlayer(request.Email, request.Name, request.Password);
            return Ok(_playerReadService.GetPlayers().Last());
        }

        [HttpGet]
        public IActionResult GetPlayers()
        {
            return Ok(_playerReadService.GetPlayers());
        }

        /*
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
        */

    }
}
