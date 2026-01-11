namespace WebsiteAppRPG.WebsiteAppRPG.Core.Entities
{
    public class Player
    {
        public int PlayerID { get; set; }

        public string Name { get; set; }

        public int PlayerPositionX { get; set; }

        public int PlayerPositionY { get; set; }

        // public PlayerColors Colors { get; set; }

        public Player()
        {
            Name = "Steve";
            PlayerPositionX = 0;
            PlayerPositionY = 0;
            // Colors = new PlayerColors(0, 127, 255, 75);
        }

        public Player(string name)
        {
            Name = name;
            PlayerPositionX = 0;
            PlayerPositionY = 0;
            // Colors = new PlayerColors(0, 127, 255, 75);
        }
    }
}
