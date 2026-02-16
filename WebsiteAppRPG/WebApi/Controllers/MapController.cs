using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application;
using WebsiteAppRPG.Application.Services.MapServices;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/maps")]
    public class MapController : ControllerBase
    {
        private readonly GameService _gameService;
        private readonly MapReadService _mapReadService;

        public MapController()
        {
            _gameService = new();
            _mapReadService = new();
        }

        [HttpGet]
        public IActionResult GetMaps()
        {
            return Ok(_mapReadService.GetMaps());
        }
    }
}
