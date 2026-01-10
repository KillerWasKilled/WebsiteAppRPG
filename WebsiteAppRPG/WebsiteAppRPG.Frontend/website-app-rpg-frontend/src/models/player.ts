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

    public name: String;

    public playerPositionX: Number;

    public playerPositionY: Number;

    public playerColors: PlayerColors;

    constructor(name: String) {
        this.name = name;
        this.playerPositionX = 0;
        this.playerPositionY = 0;
        this.playerColors = new PlayerColors(0, 127, 255, 75);
    }
}
