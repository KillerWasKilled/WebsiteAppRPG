export class Player{

    public playerId: number;

    public email: string;

    public name: string;

    public password: string;

    public characterID: number;

    constructor(playerId: number, email: string, name: string, password: string, characterId: number)
    {
        this.playerId = playerId;
        this.email = email;
        this.name = name;
        this.password = password;
        this.characterID = characterId;
    }
}
