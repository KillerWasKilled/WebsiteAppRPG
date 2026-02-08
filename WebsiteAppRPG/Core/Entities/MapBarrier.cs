using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("MapsBarriers")]
    public class MapBarrier
    {
        [Key]
        [Column("MapBarrierID")]
        [JsonPropertyName("mapBarrierId")]
        public int MapBarrierID { get; set; }

        [ForeignKey("MapID")]
        [Column("MapID")]
        [JsonPropertyName("mapId")]
        public int MapID { get; set; }

        [Column("PositionX")]
        public int PositionX { get; set; }

        [Column("PositionY")]
        public int PositionY { get; set; }

        public MapBarrier()
        {
            
        }

        public MapBarrier(int mapId, int positionX, int positionY)
        {
            MapID = mapId;
            PositionX = positionX;
            PositionY = positionY;
        }
    }
}
