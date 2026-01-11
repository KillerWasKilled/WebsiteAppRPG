using Microsoft.EntityFrameworkCore;
using WebsiteAppRPG.WebsiteAppRPG.Core.Entities;

namespace WebsiteAppRPG.WebsiteAppRPG.Persistence
{
    public class PlayerDbContext : DbContext
    {
        public DbSet<Player> Players { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=SAMUEL;Database=WebAppRPGDb;Trusted_Connection=True;TrustServerCertificate=True;");
        }

    }
}
