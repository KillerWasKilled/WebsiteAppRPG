export class PlayerColors{
    
    public playerRedColor: Number;
    
    public playerGreenColor: Number;
    
    public playerBlueColor: Number;

    public playerAlphaLevel: Number;

    constructor(redColor: Number, greenColor: Number, blueColor: Number, alphaLevel: Number) {
        this.playerRedColor = redColor;
        this.playerGreenColor = greenColor;
        this.playerBlueColor = blueColor;

        this.playerAlphaLevel = alphaLevel;
    }
}

export class Player{

    public playerID: number;

    public email: string;

    public name: string;

    public password: string;

    public positionX: number;

    public positionY: number;

    constructor(playerID: number, email: string, name: string, password: string, positionX: number, positionY: number)
    {
        this.playerID = playerID;
        this.email = email;
        this.name = name;
        this.password = password;
        this.positionX = positionX;
        this.positionY = positionY;
    }
}
