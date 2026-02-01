using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/maps")]
    public class MapController : ControllerBase
    {
        private readonly GameService _gameService;

        public MapController()
        {
            _gameService = new();
        }

        [HttpGet]
        public IActionResult GetMaps()
        {
            return Ok(_gameService.GetMaps());
        }
    }
}
