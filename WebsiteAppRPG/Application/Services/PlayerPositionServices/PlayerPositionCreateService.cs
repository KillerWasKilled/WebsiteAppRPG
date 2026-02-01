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

        public void CreatePlayerPosition(int playerId, int positionX, int positionY)
        {
            int characterId = 1;
            return;
        }
    }
}
