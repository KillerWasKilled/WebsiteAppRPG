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

        [Column("Name")]
        public string Name { get; set; }

        [Column("Width")]
        public int Width { get; set; }

        [Column("Height")]
        public int Height { get; set; }

        [Column("EntranceX")]
        public int EntranceX { get; set; }

        [Column("EntranceY")]
        public int EntranceY { get; set; }

        [Column("ExitX")]
        public int ExitX { get; set; }

        [Column("ExitY")]
        public int ExitY { get; set; }

        public Map(string name, int width, int height, int entranceX, int entranceY, int exitX, int exitY)
        {
            Name = name;

            Width = width;
            Height = height;

            EntranceX = entranceX;
            EntranceY = entranceY;

            ExitX = exitX;
            ExitY = exitY;
        }
    }
}
