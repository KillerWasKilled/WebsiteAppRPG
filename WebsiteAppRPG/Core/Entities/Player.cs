using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("Players")]
    public class Player
    {
        [Key]
        [Column("PlayerID")]
        [JsonPropertyName("playerId")]
        public int PlayerID { get; set; }

        [Column("Email")]
        public string Email { get; set; }

        [Column("Name")]
        public string Name { get; set; }

        [Column("Password")]
        public string Password { get; set; }

        [ForeignKey("CharacterID")]
        [Column("CharacterID")]
        [JsonPropertyName("characterId")]
        public int CharacterID { get; set; }

        public Player()
        {
            
        }

        public Player(string email, string name, string password, int characterId)
        {
            Email = email;
            Name = name;
            Password = password;
            CharacterID = characterId;
        }
    }
}
