using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.PlayerServices
{
    public class PlayerCreateService
    {

        private readonly ApplicationDbContext _playerCreateContext;

        public PlayerCreateService()
        {
            _playerCreateContext = new();
        }

        public void CreatePlayer(string email, string name, string password)
        {
            int characterId = 1;
            return;
        }
    }
}
