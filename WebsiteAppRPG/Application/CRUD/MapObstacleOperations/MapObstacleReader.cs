using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.MapObstacleOperations
{
    public class MapObstacleReader
    {
        private readonly ApplicationDbContext _mapObstacleContext;

        public MapObstacleReader()
        {
            _mapObstacleContext = new();
        }

        public List<MapObstacle> GetMapObstacles()
        {
            return [.. _mapObstacleContext.MapObstacles];
        }
    }
}
