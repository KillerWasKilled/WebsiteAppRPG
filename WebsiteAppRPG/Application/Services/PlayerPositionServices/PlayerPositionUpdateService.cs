using Microsoft.AspNetCore.Mvc;
using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.PlayerPositionServices
{
    public class PlayerPositionUpdateService
    {
        private readonly ApplicationDbContext _playerPositionUpdateContext;

        public PlayerPositionUpdateService()
        {
            _playerPositionUpdateContext = new();
        }

        public PlayerPosition UpdatePlayerPosition(int playerId, int positionX, int positionY) 
        {
            PlayerPosition position = _playerPositionUpdateContext.PlayerPositions.Where(p => p.PlayerID == playerId).First();

            position.PositionX = positionX;
            position.PositionY = positionY;

            _playerPositionUpdateContext.SaveChanges();

            return position;
        }

    }
}
