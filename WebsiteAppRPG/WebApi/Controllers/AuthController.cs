using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using WebsiteAppRPG.Application.Services.PlayerServices;
using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Infrastructure;

namespace WebsiteAppRPG.WebApi.Controllers
{
    public record LoginModel(string Email, string Password);

    [ApiController]
    [Route("/apis/auth")]
    public class AuthController : ControllerBase
    {
        private readonly PlayerReadService _playerReadService;
        private readonly TokenProvider _tokenProvider;

        public AuthController(IConfiguration configuration)
        {
            _playerReadService = new();
            _tokenProvider = new(configuration);
        }

        [HttpPost("login")]
        public IActionResult Login(LoginModel loginModel)
        {
            Player? player = _playerReadService.GetPlayerByEmailAndPassword(loginModel.Email, loginModel.Password);

            if (player == null)
                return Unauthorized();

            string token = _tokenProvider.Create(player);
            HttpContext.Response.Cookies.Append("Jwt", token, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Lax,
                Expires = DateTime.UtcNow.AddHours(1)
            });

            return Ok(new { token });
        }

        [Authorize]
        [HttpGet("me")]
        public IActionResult GetMe()
        {
            var playerId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            
            if (playerId == null) 
                return Unauthorized();

            List<Player> players = _playerReadService.GetPlayers();
            Player? player = players.Where(p => p.PlayerID.ToString() == playerId).FirstOrDefault();

            if (player == null) 
                return NotFound();

            return Ok(new
            {
                playerId = player.PlayerID.ToString(),
                email = player.Email,
                name = player.Name,
                characterId = player.CharacterID.ToString()
            });
        }
    }
}
