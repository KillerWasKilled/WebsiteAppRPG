using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.ObstacleOperations
{
    public class ObstacleReader
    {
        private readonly ApplicationDbContext _obstacleContext;

        public ObstacleReader()
        {
            _obstacleContext = new();
        }

        public List<Obstacle> GetObstacles()
        {
            return [.. _obstacleContext.Obstacles];
        }
    }
}
