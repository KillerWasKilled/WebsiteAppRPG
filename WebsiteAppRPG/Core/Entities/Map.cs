using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("Maps")]
    public class Map
    {
        [Key]
        [Column("MapID")]
        [JsonPropertyName("mapId")]
        public int MapId { get; set; }

        [Column("Name")]
        public string Name { get; set; }

        [Column("Width")]
        public int Width { get; set; }

        [Column("Height")]
        public int Height { get; set; }

        public Map()
        {

        }

        public Map(string name, int width, int height)
        {
            Name = name;

            Width = width;
            Height = height;
        }
    }
}
