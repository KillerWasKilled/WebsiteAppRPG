using System.ComponentModel.DataAnnotations.Schema;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("MapsBarriers")]
    public class MapBarrier
    {
        [ForeignKey("MapID")]
        [Column("MapID")]
        public int MapID { get; set; }

        [Column("PositionX")]
        public int PositionX { get; set; }

        [Column("PositionY")]
        public int PositionY { get; set; }
    }
}
