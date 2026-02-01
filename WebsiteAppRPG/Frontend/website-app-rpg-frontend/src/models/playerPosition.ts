export class PlayerPosition{

    public playerPositionId: number;

    public playerId: number;

    public mapId: number;

    public positionX: number;

    public positionY: number;

    constructor(playerPositionId: number, playerId: number, mapId: number, positionX: number, positionY : number)
    {
        this.playerPositionId = playerPositionId;
        this.playerId = playerId;
        this.mapId = mapId;
        this.positionX = positionX;
        this.positionY = positionY;
    }
}
