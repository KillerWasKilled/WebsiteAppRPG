using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("PlayerPositions")]
    public class PlayerPosition
    {
        [Key]
        [Column("PlayerPositionID")]
        [JsonPropertyName("playerPositionId")]
        public int PlayerPositionID { get; set; }

        [ForeignKey("PlayerID")]
        [Column("PlayerID")]
        [JsonPropertyName("playerId")]
        public int PlayerID { get; set; }

        [ForeignKey("MapID")]
        [Column("MapID")]
        [JsonPropertyName("mapId")]
        public int MapID { get; set; }

        [Column("PositionX")]
        public int PositionX { get; set; }

        [Column("PositionY")]
        public int PositionY { get; set; }

        public PlayerPosition()
        {
            
        }

        public PlayerPosition(int playerId, int mapId, int positionX, int positionY)
        {
            PlayerID = playerId;
            MapID = mapId;
            PositionX = positionX;
            PositionY = positionY;
        }
    }
}
