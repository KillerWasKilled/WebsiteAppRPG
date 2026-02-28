using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.MapOperations
{
    public class MapReader
    {
        private readonly ApplicationDbContext _mapContext;

        public MapReader()
        {
            _mapContext = new();
        }

        public List<Map> GetMaps()
        {
            return [.. _mapContext.Maps];
        }
    }
}
