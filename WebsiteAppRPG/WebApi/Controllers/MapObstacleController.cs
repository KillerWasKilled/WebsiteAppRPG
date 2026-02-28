using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application.CRUD.MapObstacleOperations;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/map_obstacles")]
    public class MapObstacleController : ControllerBase
    {
        private readonly MapObstacleReader _mapObstacleReader;

        public MapObstacleController()
        {
            _mapObstacleReader = new();
        }

        [HttpGet]
        public IActionResult GetMapObstacles()
        {
            return Ok(_mapObstacleReader.GetMapObstacles());
        }
    }
}
