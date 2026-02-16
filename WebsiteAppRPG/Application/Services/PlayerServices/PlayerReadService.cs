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

        public Player? GetPlayerByEmailAndPassword(string email, string password)
        {
            return _playerReadContext.Players.Where(p => p.Email == email &&  p.Password == password).FirstOrDefault();
        }

    }
}
