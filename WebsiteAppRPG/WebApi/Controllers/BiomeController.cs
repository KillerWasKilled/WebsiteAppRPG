using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Application.CRUD.BiomeOperations;

namespace WebsiteAppRPG.WebApi.Controllers
{
    [ApiController]
    [Route("apis/biomes")]
    public class BiomeController : ControllerBase
    {
        private readonly BiomeReader _biomeReader;

        public BiomeController()
        {
            _biomeReader = new();
        }

        [HttpGet]
        public IActionResult GetBiomes()
        {
            return Ok(_biomeReader.GetBiomes());
        }
    }
}
