using Microsoft.AspNetCore.Identity;
using System.Runtime.CompilerServices;
using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.WebApi
{
    public class LoginPlayer(ApplicationDbContext context, PasswordHasher<string> passwordHasher)
    {
        public record Request(string Email, string Password);

        public async Task<Player> Handle(Request request)
        {
            Player? player = await Task.Run(() => context.Players.Where(x => x.Email == request.Email).First());

            // TOHLE NEFUNGUJE player ?? throw new Exception("Player not found!");

            PasswordVerificationResult verificationResult = passwordHasher.VerifyHashedPassword(request.Email, request.Password, player.Password);

            if (verificationResult != PasswordVerificationResult.Success)
            {
                throw new Exception("The password is incorrect!");
            }

            return player;
        }


    }
}
