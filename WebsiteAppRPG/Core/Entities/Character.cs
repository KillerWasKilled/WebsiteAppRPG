using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("Characters")]
    public class Character
    {
        [Key]
        [Column("CharacterID")]
        public int CharacterID { get; set; }

        [Column("Name")]
        public string Name { get; set; }

        public Character(int characterId, string name)
        {
            CharacterID = characterId;
            Name = name;
        }
    }
}
