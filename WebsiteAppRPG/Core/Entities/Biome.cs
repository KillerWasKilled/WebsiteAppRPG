using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("Biomes")]
    public class Biome
    {
        [Key]
        [Column("BiomeID")]
        [JsonPropertyName("biomeId")]
        public int BiomeID { get; set; }

        [Column("BiomeName")]
        public string BiomeName { get; set; }

        public Biome()
        {
            
        }

        public Biome(string biomeName)
        {
            BiomeName = biomeName;
        }
    }
}
