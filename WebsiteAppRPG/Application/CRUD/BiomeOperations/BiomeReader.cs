using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.BiomeOperations
{
    public class BiomeReader
    {
        private readonly ApplicationDbContext _biomeContext;
        
        public BiomeReader()
        {
            _biomeContext = new();
        }

        public List<Biome> GetBiomes()
        {
            return [.. _biomeContext.Biomes];
        }
    }
}
