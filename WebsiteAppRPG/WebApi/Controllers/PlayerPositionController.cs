using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application.Services.PlayerPositionServices;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/player_positions")]
    public class PlayerPositionController : ControllerBase
    {
        private readonly PlayerPositionCreateService playerPositionCreateService;
        private readonly PlayerPositionReadService _playerPositionReadService;
        private readonly PlayerPositionUpdateService _playerPositionUpdateService;

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
    }
}
