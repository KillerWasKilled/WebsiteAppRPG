using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.MapBarrierServices
{
    public class MapBarrierReadService
    {
        private readonly ApplicationDbContext _mapBarrierReadContext;

        public MapBarrierReadService()
        {
            _mapBarrierReadContext = new();
        }
        public List<MapBarrier> GetMapBarriers()
        {
            return [.. _mapBarrierReadContext.MapBarriers];
        }
    }
}
