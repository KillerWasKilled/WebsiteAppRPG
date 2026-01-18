using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebsiteAppRPG.WebsiteAppRPG.Core.Entities
{
    [Table("Players")]
    public class Player
    {
        [Key]
        [Column("PlayerID")]
        public int PlayerID { get; set; }

        [Column("Email")]
        public string Email { get; set; }

        [Column("PlayerName")]
        public string Name { get; set; }

        [Column("Password")]
        public string Password { get; set; }

        [Column("PositionX")]
        public int PositionX { get; set; }

        [Column("PositionY")]
        public int PositionY { get; set; }

        public Player(string email, string name, string password, int positionX, int positionY)
        {
            Email = email;
            Name = name;
            Password = password;
            PositionX = positionX;
            PositionY = positionY;
        }
    }
}
