using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.PlayerServices
{
    public class PlayerReadService
    {
        private readonly ApplicationDbContext _playerReadContext;

        public PlayerReadService()
        {
            _playerReadContext = new();
        }

        public List<Player> GetPlayers()
        {
            return [.. _playerReadContext.Players];
        }

    }
}
