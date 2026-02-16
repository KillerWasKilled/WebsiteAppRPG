using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application;
using WebsiteAppRPG.Application.Services.PlayerPositionServices;
using WebsiteAppRPG.Core.Entities;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/player_positions")]
    public class PlayerPositionController : ControllerBase
    {
        private readonly PlayerPositionCreateService playerPositionCreateService;
        private readonly PlayerPositionReadService _playerPositionReadService;
        private readonly PlayerPositionUpdateService _playerPositionUpdateService;

        public record Position(int MapID, int X, int Y);

        public PlayerPositionController()
        {
            _playerPositionReadService = new();
            _playerPositionUpdateService = new();
        }

        [HttpGet]
        public IActionResult GetPlayerPositions()
        {
            return Ok(_playerPositionReadService.GetPlayerPositions());
        }

        public IActionResult UpdatePlayerPosition(int id, int positionX, int positionY)
        {
            return Ok(_playerPositionUpdateService.UpdatePlayerPosition(id, positionX, positionY));
        }

        [HttpPost("/apis/players/{id}")]
        public IActionResult UpdatePlayerPosition(int id, [FromBody] Position updatedPosition)
        {
            List<PlayerPosition> positions = _playerPositionReadService.GetPlayerPositions();

            PlayerPosition position = positions.First(x => x.PlayerID == id);

            if (position == null)
            {
                return NotFound(position);
            }
               
            position = _playerPositionUpdateService.UpdatePlayerPosition(id, updatedPosition.MapID, updatedPosition.X, updatedPosition.Y);

            return Ok(position);
        }
    }
}
