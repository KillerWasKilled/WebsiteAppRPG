using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("MapRouters")]
    public class MapRouter
    {
        [Key]
        [Column("MapRouterID")]
        [JsonPropertyName("mapRouterId")]
        public int MapRouterID { get; set; }

        [ForeignKey("MapID")]
        [Column("MapID")]
        [JsonPropertyName("mapId")]
        public int MapID { get; set; }

        [Column("EnterPositionX")]
        public int EnterPositionX { get; set; }

        [Column("EnterPositionY")]
        public int EnterPositionY { get; set; }

        [Column("ExitPositionX")]
        public int ExitPositionX { get; set; }

        [Column("ExitPositionY")]
        public int ExitPositionY { get; set; }

        [Column("DestinationMapID")]
        [JsonPropertyName("destinationMapId")]
        public int DestinationMapID { get; set; }

        public MapRouter()
        {
            
        }

        public MapRouter(int mapId, int enterPositionX, int enterPositionY, int exitPositionX, int exitPositionY)
        {
            MapID = mapId;
            EnterPositionX = enterPositionX;
            EnterPositionY = enterPositionY;
            ExitPositionX = exitPositionX;
            ExitPositionY = exitPositionY;
        }

    }
}
