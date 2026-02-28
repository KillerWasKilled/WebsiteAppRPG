using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application;
using WebsiteAppRPG.Application.CRUD.PlayerPositionOperations;
using WebsiteAppRPG.Core.Entities;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/player_positions")]
    public class PlayerPositionController : ControllerBase
    {
        private readonly PlayerPositionCreator _playerPositionCreator;
        private readonly PlayerPositionReader _playerPositionReader;
        private readonly PlayerPositionUpdater _playerPositionUpdater;

        public record Position(int MapID, int X, int Y);

        public PlayerPositionController()
        {
            _playerPositionCreator = new();
            _playerPositionReader = new();
            _playerPositionUpdater = new();
        }

        [HttpGet]
        public IActionResult GetPlayerPositions()
        {
            return Ok(_playerPositionReader.GetPlayerPositions());
        }

        public IActionResult UpdatePlayerPosition(int id, int positionX, int positionY)
        {
            return Ok(_playerPositionUpdater.UpdatePlayerPosition(id, positionX, positionY));
        }

        [HttpPost("/apis/players/{id}")]
        public IActionResult UpdatePlayerPosition(int id, [FromBody] Position updatedPosition)
        {
            List<PlayerPosition> positions = _playerPositionReader.GetPlayerPositions();

            PlayerPosition position = positions.First(x => x.PlayerID == id);

            if (position == null)
            {
                return NotFound(position);
            }
               
            position = _playerPositionUpdater.UpdatePlayerPosition(id, updatedPosition.MapID, updatedPosition.X, updatedPosition.Y);

            return Ok(position);
        }
    }
}
