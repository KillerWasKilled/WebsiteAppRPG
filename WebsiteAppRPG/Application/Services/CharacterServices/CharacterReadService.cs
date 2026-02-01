using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.Services.CharacterServices
{
    public class CharacterReadService
    {
        private readonly ApplicationDbContext _characterReadContext;

        public CharacterReadService()
        {
            _characterReadContext = new();
        }

        public List<Character> GetCharacters()
        {
            return [.. _characterReadContext.Characters];
        }
    }
}
