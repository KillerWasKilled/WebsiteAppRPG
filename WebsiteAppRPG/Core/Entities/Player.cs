using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebsiteAppRPG.Core.Entities
{
    [Table("Players")]
    public class Player
    {
        [Key]
        [Column("PlayerID")]
        public int PlayerID { get; set; }

        [Column("Email")]
        public string Email { get; set; }

        [Column("Name")]
        public string Name { get; set; }

        [Column("Password")]
        public string Password { get; set; }

        [ForeignKey("CharacterID")]
        [Column("CharacterID")]
        public int CharacterID { get; set; }

        public Player()
        {
            
        }

        public Player(int playerId, string email, string name, string password, int characterId)
        {
            PlayerID = playerId;
            Email = email;
            Name = name;
            Password = password;
            CharacterID = characterId;
        }
    }
}
