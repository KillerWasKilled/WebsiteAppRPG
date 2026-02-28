using WebsiteAppRPG.Application.CRUD.PlayerPositionOperations;
using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.PlayerOperations
{
    public class PlayerCreator
    {
        private readonly ApplicationDbContext _playerContext;
        private readonly PlayerPositionCreator _playerPositionCreator;

        public PlayerCreator()
        {
            _playerContext = new();
            _playerPositionCreator = new();
        }

        public void CreatePlayer(string email, string name, string password)
        {
            int characterId = 1;

            _playerContext.Players.Add(new Player(email, name, password, characterId));
            _playerContext.SaveChanges();

            Player recentPlayer = _playerContext.Players.OrderBy(x => x.PlayerID).Last();

            _playerPositionCreator.CreatePlayerPosition(recentPlayer.PlayerID, 1, 0, 0);
            _playerContext.SaveChanges();
        }
    }
}
