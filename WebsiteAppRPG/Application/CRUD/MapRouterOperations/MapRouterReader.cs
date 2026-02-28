using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.MapRouterOperations
{
    public class MapRouterReader
    {
        private readonly ApplicationDbContext _mapRouterContext;

        public MapRouterReader()
        {
            _mapRouterContext = new();
        }
        public List<MapRouter> GetMapRouters()
        {
            return [.. _mapRouterContext.MapRouters];
        }

    }
}
