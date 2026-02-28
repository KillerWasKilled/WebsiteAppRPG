using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.PlayerOperations
{
    public class PlayerReader
    {
        private readonly ApplicationDbContext _playerContext;

        public PlayerReader()
        {
            _playerContext = new();
        }

        public List<Player> GetPlayers()
        {
            return [.. _playerContext.Players];
        }

        public Player? GetPlayerByEmailAndPassword(string email, string password)
        {
            return _playerContext.Players.Where(p => p.Email == email && p.Password == password).FirstOrDefault();
        }

    }
}
