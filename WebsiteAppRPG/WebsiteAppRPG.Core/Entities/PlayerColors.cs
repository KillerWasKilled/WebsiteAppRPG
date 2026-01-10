namespace WebsiteAppRPG.WebsiteAppRPG.Core.Entities
{
    public class PlayerColors
    {
        public byte PlayerRedColor { get; set; }

        public byte PlayerGreenColor { get; set; }

        public byte PlayerBlueColor { get; set; }

        public byte PlayerAlphaLevel { get; set; }

        public PlayerColors(byte playerRedColor, byte playerGreenColor, byte playerBlueColor, byte playerAlphaLevel)
        {
            PlayerRedColor = playerRedColor;
            PlayerGreenColor = playerGreenColor;
            PlayerBlueColor = playerBlueColor;

            if (playerAlphaLevel > 100)
                PlayerAlphaLevel = 100;

            else
                PlayerAlphaLevel = playerAlphaLevel;
        }
    }
}
