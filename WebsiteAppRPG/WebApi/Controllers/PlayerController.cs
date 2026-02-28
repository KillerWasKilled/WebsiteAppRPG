using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata;
using WebsiteAppRPG.Application;
using WebsiteAppRPG.Application.CRUD.PlayerOperations;
using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/players")]
    public class PlayerController : ControllerBase
    {

        private readonly PlayerCreator _playerCreator;
        private readonly PlayerReader _playerReader;

        public record NewPlayerRequest(string Email, string Name, string Password);

        public PlayerController()
        {
            _playerCreator = new();
            _playerReader = new();
        }

        [HttpPost("/apis/players")]
        public IActionResult CreatePlayer([FromBody] NewPlayerRequest request)
        {
            _playerCreator.CreatePlayer(request.Email, request.Name, request.Password);
            return Ok(_playerReader.GetPlayers().Last());
        }

        [HttpGet]
        public IActionResult GetPlayers()
        {
            return Ok(_playerReader.GetPlayers());
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
