using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.PlayerPositionOperations
{
    public class PlayerPositionReader
    {
        private readonly ApplicationDbContext _playerPositionsContext;

        public PlayerPositionReader()
        {
            _playerPositionsContext = new();
        }

        public List<PlayerPosition> GetPlayerPositions()
        {
            return [.. _playerPositionsContext.PlayerPositions];
        }
    }
}
