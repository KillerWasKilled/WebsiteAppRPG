using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.MapRouterServices
{
    public class MapRouterReader
    {
        private readonly ApplicationDbContext _mapRouterReadContext;

        public MapRouterReader()
        {
            _mapRouterReadContext = new();
        }
        public List<MapRouter> GetMapRouters()
        {
            return [.. _mapRouterReadContext.MapRouters];
        }

    }
}
