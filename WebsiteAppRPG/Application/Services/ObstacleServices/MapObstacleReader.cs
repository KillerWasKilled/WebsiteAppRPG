using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.ObstacleServices
{
    public class MapObstacleReader
    {
        private readonly ApplicationDbContext _mapObstacleReadContext;

        public MapObstacleReader()
        {
            _mapObstacleReadContext = new();
        }

        public List<MapObstacle> GetMapObstacles()
        {
            return [.. _mapObstacleReadContext.MapObstacles];
        }
    }
}
