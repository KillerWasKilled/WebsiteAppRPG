using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application.Services.PlayerServices;
using WebsiteAppRPG.Application;
using WebsiteAppRPG.Application.Services.MapBarrierServices;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/map_barriers")]
    public class MapBarrierController : ControllerBase
    {
        private readonly MapBarrierReadService _mapBarrierReadService;

        public MapBarrierController()
        {
            _mapBarrierReadService = new();
        }

        [HttpGet]
        public IActionResult GetMapBarriers()
        {
            return Ok(_mapBarrierReadService.GetMapBarriers());
        }

    }
}
