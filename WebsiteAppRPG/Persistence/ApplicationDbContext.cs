using Microsoft.EntityFrameworkCore;
using WebsiteAppRPG.Core.Entities;

namespace WebsiteAppRPG.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Character> Characters { get; set; }

        public DbSet<Player> Players { get; set; }

        public DbSet<Biome> Biomes { get; set; }

        public DbSet<Map> Maps { get; set; }

        public DbSet<MapBarrier> MapBarriers { get; set; }

        public DbSet<PlayerPosition> PlayerPositions { get; set; }

        public DbSet<MapRouter> MapRouters { get; set; }

        public DbSet<Obstacle> Obstacles { get; set; }

        public DbSet<MapObstacle> MapObstacles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Home
            string homeConnectionString = "Server=SAMUEL;Database=WebAppRPGDb;Trusted_Connection=True;TrustServerCertificate=True;";
            optionsBuilder.UseSqlServer(homeConnectionString);

            // School
            /*
            string schoolConnectionString = "Server=L107PC03;Database=WebAppRPGDb;Trusted_Connection=True;TrustServerCertificate=True;";
            optionsBuilder.UseSqlServer(schoolConnectionString);*/
        }

    }
}
