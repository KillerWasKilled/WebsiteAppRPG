using WebsiteAppRPG.WebsiteAppRPG.Core.Entities;

namespace WebsiteAppRPG.WebsiteAppRPG.Application
{
    public class GameService
    {
        private readonly List<Player> _players;

        public GameService()
        {
            _players = [];

            _players.Add(new Player());
            _players.Add(new Player("Jirka"));
            _players.Add(new Player("Samuel"));
            _players.Add(new Player("Verča"));
            _players.Add(new Player("Františka"));
            _players.Add(new Player("Kira"));
            _players.Add(new Player("Anička"));
            _players.Add(new Player("DOM Chat"));
            _players.Add(new Player("Sofča"));
            _players.Add(new Player("Spongebob"));
            _players.Add(new Player("Domča"));
            _players.Add(new Player("Sonic"));
        }

        public List<Player> GetPlayers()
        {
            return _players;
        }
    }
}
