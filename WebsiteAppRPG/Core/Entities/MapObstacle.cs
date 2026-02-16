using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("MapsObstacles")]
    public class MapObstacle
    {
        [Key]
        [Column("MapObstacleID")]
        [JsonPropertyName("mapObstacleId")]
        public int MapObstacleID { get; set; }

        [ForeignKey("MapID")]
        [Column("MapID")]
        [JsonPropertyName("mapId")]
        public int MapID { get; set; }

        [ForeignKey("ObstacleID")]
        [Column("ObstacleID")]
        [JsonPropertyName("obstacleId")]
        public int ObstacleID { get; set; }

        [Column("PositionX")]
        public int PositionX { get; set; }

        [Column("PositionY")]
        public int PositionY { get; set; }

        public MapObstacle()
        {
            
        }

        public MapObstacle(int mapId, int obstacleId, int posX, int posY)
        {
            MapID = mapId;
            ObstacleID = obstacleId;
            PositionX = posX;
            PositionY = posY;
        }


    }
}
