namespace WebsiteAppRPG.WebsiteAppRPG.Core.Entities
{
    public class Map
    {
        public int MapID { get; set; }

        public int MapWidth { get; set; }

        public int MapHeight { get; set; }

        public Map(int mapWidth, int mapHeight)
        {
            MapWidth = mapWidth;
            MapHeight = mapHeight;
        }
    }
}
