namespace WebsiteAppRPG.WebsiteAppRPG.Core.Entities
{
    public class Player
    {
        public string Name { get; set; }

        public (int X, int Y) PlayerPosition { get; set; }

        public PlayerColors Colors { get; set; }

        public Player()
        {
            Name = "Steve";
            PlayerPosition = (0, 0);
        }

        public Player(string name)
        {
            Name = name;
            PlayerPosition = (0, 0);
        }
    }
}
