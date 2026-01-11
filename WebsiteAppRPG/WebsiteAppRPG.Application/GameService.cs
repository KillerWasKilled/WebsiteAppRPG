using WebsiteAppRPG.WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.WebsiteAppRPG.Application
{
    public class GameService
    {
        private readonly ApplicationDbContext _dbContext;

        public GameService()
        {
            _dbContext = new();
        }

        public List<Player> GetPlayers()
        {
            return _dbContext.Players.ToList();
        }

        public List<Map> GetMaps()
        {
            return _dbContext.Maps.ToList();
        }
    }
}
