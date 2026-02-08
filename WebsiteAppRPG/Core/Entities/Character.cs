using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("Characters")]
    public class Character
    {
        [Key]
        [Column("CharacterID")]
        [JsonPropertyName("characterId")]
        public int CharacterID { get; set; }

        [Column("Name")]
        public string Name { get; set; }

        public Character()
        {
            
        }

        public Character(string name)
        {
            Name = name;
        }
    }
}
