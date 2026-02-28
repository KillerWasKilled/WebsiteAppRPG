using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application.CRUD.MapRouterOperations;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/map_routers")]
    public class MapRouterController : ControllerBase
    {
        private readonly MapRouterReader _mapRouterReader;

        public MapRouterController()
        {
            _mapRouterReader = new();
        }

        [HttpGet]
        public IActionResult GetMapRouters()
        {
            return Ok(_mapRouterReader.GetMapRouters());
        }
    }
}
