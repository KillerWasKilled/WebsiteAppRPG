using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.PlayerPositionServices
{
    public class PlayerPositionReadService
    {
        private readonly ApplicationDbContext _playerPositionsReadContext;

        public PlayerPositionReadService()
        {
            _playerPositionsReadContext = new();
        }

        public List<PlayerPosition> GetPlayerPositions()
        {
            return [.. _playerPositionsReadContext.PlayerPositions];
        }
    }
}
