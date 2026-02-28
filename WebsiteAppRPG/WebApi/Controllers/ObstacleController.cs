using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application.CRUD.ObstacleOperations;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/obstacles")]
    public class ObstacleController : ControllerBase
    {
        private readonly ObstacleReader _obstacleReader;

        public ObstacleController()
        {
            _obstacleReader = new();
        }

        [HttpGet]
        public IActionResult GetObstacles()
        {
            return Ok(_obstacleReader.GetObstacles());
        }

    }
}
