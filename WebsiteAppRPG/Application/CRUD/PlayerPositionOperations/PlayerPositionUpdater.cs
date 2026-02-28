using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.PlayerPositionOperations
{
    public class PlayerPositionUpdater
    {
        private readonly ApplicationDbContext _playerPositionContext;

        public PlayerPositionUpdater()
        {
            _playerPositionContext = new();
        }

        public PlayerPosition UpdatePlayerPosition(int playerId, int positionX, int positionY)
        {
            PlayerPosition position = _playerPositionContext.PlayerPositions.Where(p => p.PlayerID == playerId).First();

            position.PositionX = positionX;
            position.PositionY = positionY;

            _playerPositionContext.SaveChanges();

            return position;
        }

        public PlayerPosition UpdatePlayerPosition(int playerId, int mapId, int positionX, int positionY)
        {
            PlayerPosition position = _playerPositionContext.PlayerPositions.Where(p => p.PlayerID == playerId).First();

            position.MapID = mapId;
            position.PositionX = positionX;
            position.PositionY = positionY;

            _playerPositionContext.SaveChanges();

            return position;
        }

    }
}
