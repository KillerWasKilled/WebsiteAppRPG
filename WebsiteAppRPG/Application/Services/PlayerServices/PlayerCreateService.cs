using WebsiteAppRPG.Application.Services.PlayerPositionServices;
using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.PlayerServices
{
    public class PlayerCreateService
    {

        private readonly ApplicationDbContext _playerCreateContext;
        private readonly PlayerPositionCreateService _playerPositionCreateService;

        public PlayerCreateService()
        {
            _playerCreateContext = new();
            _playerPositionCreateService = new();
        }

        public void CreatePlayer(string email, string name, string password)
        {
            int characterId = 1;

            _playerCreateContext.Players.Add(new Player(email, name, password, characterId));
            _playerCreateContext.SaveChanges();

            Player recentPlayer = _playerCreateContext.Players.OrderBy(x => x.PlayerID).Last();

            _playerPositionCreateService.CreatePlayerPosition(recentPlayer.PlayerID, 1, 0, 0);
            _playerCreateContext.SaveChanges();
        }
    }
}
