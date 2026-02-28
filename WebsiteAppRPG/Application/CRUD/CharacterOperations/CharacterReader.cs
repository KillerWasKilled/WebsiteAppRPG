using WebsiteAppRPG.Core;
using WebsiteAppRPG.Core.Entities;
using WebsiteAppRPG.Persistence;

namespace WebsiteAppRPG.Application.CRUD.CharacterOperations
{
    public class CharacterReader
    {
        private readonly ApplicationDbContext _characterContext;

        public CharacterReader()
        {
            _characterContext = new();
        }

        public List<Character> GetCharacters()
        {
            return [.. _characterContext.Characters];
        }
    }
}
