using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebsiteAppRPG.WebsiteAppRPG.Core.Entities
{
    [Table("Maps")]
    public class Map
    {
        [Key]
        [Column("MapID")]
        public int MapId { get; set; }

        [Column("MapWidth")]
        public int MapWidth { get; set; }

        [Column("MapHeight")]
        public int MapHeight { get; set; }

        public Map(int mapWidth, int mapHeight)
        {
            MapWidth = mapWidth;
            MapHeight = mapHeight;
        }
    }
}
