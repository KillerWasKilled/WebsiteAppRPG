using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Security.Claims;
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
        private readonly PlayerUpdater _playerUpdater;

        public record NewPlayerRequest(string Email, string Name, string Password);
        public record CharacterRequest(int CharacterId);

        public PlayerController()
        {
            _playerCreator = new();
            _playerReader = new();
            _playerUpdater = new();
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
        [Authorize]
        [HttpPost("me")]
        public IActionResult UpdatePlayersCharacter([FromBody] CharacterRequest request)
        {
            var playerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);

            _playerUpdater.UpdateCharacter(playerId, request.CharacterId);

            return Ok(_playerReader.GetPlayers().Where(p => p.PlayerID == playerId).First());
        }
        */

    }
}
