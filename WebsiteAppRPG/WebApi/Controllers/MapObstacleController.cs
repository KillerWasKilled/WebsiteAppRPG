using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application.CRUD.MapObstacleOperations;
using WebsiteAppRPG.Core.Entities;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/map_obstacles")]
    public class MapObstacleController : ControllerBase
    {
        private readonly MapObstacleReader _mapObstacleReader;
        private readonly MapObstacleDeleter _mapObstacleDeleter;

        public record MapRecord(int MapObstacleID, int X, int Y);

        public MapObstacleController()
        {
            _mapObstacleReader = new();
            _mapObstacleDeleter = new();
        }

        [HttpGet]
        public IActionResult GetMapObstacles()
        {
            return Ok(_mapObstacleReader.GetMapObstacles());
        }

        [HttpDelete]
        public IActionResult DeleteMapObstacle(MapRecord record)
        {
            _mapObstacleDeleter.DeleteMapObstacle(record.MapObstacleID, record.X, record.Y);
            return Ok();
        }
    }
}
