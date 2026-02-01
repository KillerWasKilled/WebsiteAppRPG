using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("PlayerPositions")]
    public class PlayerPosition
    {
        [Key]
        [Column("PlayerPositionID")]
        public int PlayerPositionID { get; set; }

        [ForeignKey("PlayerID")]
        [Column("PlayerID")]
        public int PlayerID { get; set; }

        [ForeignKey("MapID")]
        [Column("MapID")]
        public int MapID { get; set; }

        [Column("PositionX")]
        public int PositionX { get; set; }

        [Column("PositionY")]
        public int PositionY { get; set; }

        public PlayerPosition()
        {
            
        }

        public PlayerPosition(int playerPositionId, int playerId, int mapId, int positionX, int positionY)
        {
            PlayerPositionID = playerPositionId;
            PlayerID = playerId;
            MapID = mapId;
            PositionX = positionX;
            PositionY = positionY;
        }
    }
}
