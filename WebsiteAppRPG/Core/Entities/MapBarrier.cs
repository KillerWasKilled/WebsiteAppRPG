using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("MapsBarriers")]
    public class MapBarrier
    {
        [Key]
        [Column("MapBarrierID")]
        public int MapBarrierID { get; set; }

        [ForeignKey("MapID")]
        [Column("MapID")]
        public int MapID { get; set; }

        [Column("PositionX")]
        public int PositionX { get; set; }

        [Column("PositionY")]
        public int PositionY { get; set; }

        public MapBarrier()
        {
            
        }

        public MapBarrier(int mapBarrierId, int mapId, int positionX, int positionY)
        {
            MapBarrierID = mapBarrierId;
            MapID = mapId;
            PositionX = positionX;
            PositionY = positionY;
        }
    }
}
