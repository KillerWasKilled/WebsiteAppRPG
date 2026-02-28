using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application;
using WebsiteAppRPG.Application.CRUD.MapBarrierOperations;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/map_barriers")]
    public class MapBarrierController : ControllerBase
    {
        private readonly MapBarrierReader _mapBarrierReader;

        public MapBarrierController()
        {
            _mapBarrierReader = new();
        }

        [HttpGet]
        public IActionResult GetMapBarriers()
        {
            return Ok(_mapBarrierReader.GetMapBarriers());
        }

    }
}
