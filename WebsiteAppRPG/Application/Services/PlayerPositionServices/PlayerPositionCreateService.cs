using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.PlayerPositionServices
{
    public class PlayerPositionCreateService
    {

        private readonly ApplicationDbContext _playerPositionCreateContext;

        public PlayerPositionCreateService()
        {
            _playerPositionCreateContext = new();
        }

        public void CreatePlayerPosition(int playerId, int mapId, int positionX, int positionY)
        {
            PlayerPosition position = new(playerId, mapId, positionX, positionY);
            _playerPositionCreateContext.PlayerPositions.Add(position);
            _playerPositionCreateContext.SaveChanges();
            return;
        }
    }
}
