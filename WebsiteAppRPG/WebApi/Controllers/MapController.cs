using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application;
using WebsiteAppRPG.Application.CRUD.MapOperations;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/maps")]
    public class MapController : ControllerBase
    {
        private readonly MapReader _mapReader;

        public MapController()
        {
            _mapReader = new();
        }

        [HttpGet]
        public IActionResult GetMaps()
        {
            return Ok(_mapReader.GetMaps());
        }
    }
}
