using Microsoft.IdentityModel.Tokens;
using System.Text;
using WebsiteAppRPG.Core.Entities;
using System.Security.Claims;
using System.IdentityModel.Tokens;
using Microsoft.IdentityModel.JsonWebTokens;

namespace WebsiteAppRPG.Infrastructure
{
    public class TokenProvider
    {
        private readonly IConfiguration _configuration;

        public TokenProvider(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string Create(Player player)
        {
            string? secretKey = _configuration["Jwt:Secret"];
            SymmetricSecurityKey securityKey = new (Encoding.UTF8.GetBytes(secretKey ?? ""));

            SigningCredentials credentials = new (securityKey, SecurityAlgorithms.HmacSha256);

            SecurityTokenDescriptor securityToken = new()
            {
                Subject = new ClaimsIdentity(
                [
                    new Claim(JwtRegisteredClaimNames.Sub, player.PlayerID.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, player.Email),
                    new Claim(JwtRegisteredClaimNames.UniqueName, player.Name)
                ]
                ),

                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = credentials,
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"]
            };

            JsonWebTokenHandler tokenHandler = new();

            string token = tokenHandler.CreateToken(securityToken);

            return token;
        }
    }
}
