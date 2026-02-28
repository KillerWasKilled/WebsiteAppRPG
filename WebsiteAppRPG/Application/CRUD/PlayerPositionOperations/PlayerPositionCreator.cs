using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.PlayerPositionOperations
{
    public class PlayerPositionCreator
    {

        private readonly ApplicationDbContext _playerPositionContext;

        public PlayerPositionCreator()
        {
            _playerPositionContext = new();
        }

        public void CreatePlayerPosition(int playerId, int mapId, int positionX, int positionY)
        {
            PlayerPosition position = new(playerId, mapId, positionX, positionY);
            _playerPositionContext.PlayerPositions.Add(position);
            _playerPositionContext.SaveChanges();
            return;
        }
    }
}
