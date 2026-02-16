using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.MapServices
{
    public class MapReadService
    {
        private readonly ApplicationDbContext _mapReadContext;

        public MapReadService()
        {
            _mapReadContext = new();
        }

        public List<Map> GetMaps()
        {
            return [.. _mapReadContext.Maps];
        }
    }
}
