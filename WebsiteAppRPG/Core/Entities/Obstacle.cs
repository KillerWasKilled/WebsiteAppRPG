using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("Obstacles")]
    public class Obstacle
    {
        [Key]
        [Column("ObstacleID")]
        [JsonPropertyName("obstacleId")]
        public int ObstacleID { get; set; }

        [Column("ObstacleName")]
        public string ObstacleName { get; set; }

        [Column("IsBreakable")]
        public bool IsBreakable { get; set; }

        public Obstacle()
        {

        }

        public Obstacle(string obstacleName, bool isBreakable)
        {
            ObstacleName = obstacleName;
            IsBreakable = isBreakable;
        }
    }
}
