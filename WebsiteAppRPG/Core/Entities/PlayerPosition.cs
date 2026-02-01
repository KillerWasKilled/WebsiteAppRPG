using System.ComponentModel.DataAnnotations.Schema;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("PlayerPositions")]
    public class PlayerPosition
    {
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
    }
}
