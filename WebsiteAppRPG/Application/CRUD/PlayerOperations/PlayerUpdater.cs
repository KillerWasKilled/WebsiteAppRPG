using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.PlayerOperations
{
    public class PlayerUpdater
    {
        private readonly ApplicationDbContext _playerContext;

        public PlayerUpdater()
        {
            _playerContext = new();
        }

        public void UpdateCharacter(int playerId, int characterId)
        {
            Player player = _playerContext.Players.Where(p => p.PlayerID == playerId).First();
            player.CharacterID = characterId;
            _playerContext.SaveChanges();
        }
    }
}
