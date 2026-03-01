using WebsiteAppRPG.Application.CRUD.ObstacleOperations;
using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.MapObstacleOperations
{
    public class MapObstacleDeleter
    {
        private readonly ApplicationDbContext _mapObstacleContext;
        private readonly ObstacleReader _obstacleReader;

        public MapObstacleDeleter()
        {
            _mapObstacleContext = new();
            _obstacleReader = new();
        }

        public void DeleteMapObstacle(int mapObstacleId, int positionX, int positionY)
        {
            MapObstacle? moToDelete = _mapObstacleContext.MapObstacles.FirstOrDefault(
                obstacle => obstacle.MapObstacleID == mapObstacleId && 
                obstacle.PositionX == positionX && 
                obstacle.PositionY == positionY);

            if (moToDelete == null)
                return;

            Obstacle obstacle = _obstacleReader.GetObstacles().First(obstacle => obstacle.ObstacleID == moToDelete.ObstacleID);

            _mapObstacleContext.MapObstacles.Remove(moToDelete);
            _mapObstacleContext.SaveChanges();
        }

    }
}
