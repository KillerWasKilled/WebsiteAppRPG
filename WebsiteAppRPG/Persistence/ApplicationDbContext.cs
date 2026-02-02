using Microsoft.EntityFrameworkCore;
using WebsiteAppRPG.Core.Entities;

namespace WebsiteAppRPG.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Character> Characters { get; set; }

        public DbSet<Player> Players { get; set; }

        public DbSet<PlayerPosition> PlayerPositions { get; set; }

        public DbSet<Map> Maps { get; set; }

        public DbSet<MapBarrier> MapBarriers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // string homeConnectionString = "Server=SAMUEL;Database=WebAppRPGDb;Trusted_Connection=True;TrustServerCertificate=True;";
            string schoolConnectionString = "Server=L107PC03;Database=WebAppRPGDb;Trusted_Connection=True;TrustServerCertificate=True;";

            // optionsBuilder.UseSqlServer(homeConnectionString);
            optionsBuilder.UseSqlServer(schoolConnectionString);
        }

    }
}
