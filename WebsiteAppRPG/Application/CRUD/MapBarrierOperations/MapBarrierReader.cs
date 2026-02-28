using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.MapBarrierOperations
{
    public class MapBarrierReader
    {
        private readonly ApplicationDbContext _mapBarrierContext;

        public MapBarrierReader()
        {
            _mapBarrierContext = new();
        }
        public List<MapBarrier> GetMapBarriers()
        {
            return [.. _mapBarrierContext.MapBarriers];
        }
    }
}
