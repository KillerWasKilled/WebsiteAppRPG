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
            List<Player> players = [];

            foreach (Player player in _dbContext.Players)
            {
                players.Add(player);
            }

            return players;
        }

        public List<Map> GetMaps()
        {
            List<Map> maps = [];
            
            foreach (Map map in _dbContext.Maps)
            {
                maps.Add(map);
            }

            return maps;
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }   
    }
}
