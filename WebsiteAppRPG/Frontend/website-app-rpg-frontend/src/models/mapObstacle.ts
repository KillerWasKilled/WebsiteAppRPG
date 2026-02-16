export class MapObstacle{

    public mapObstacleId: number;

    public mapId: number;

    public obstacleId: number;

    public positionX: number;

    public positionY: number;

    constructor(mapObstacleId: number, mapId: number, obstacledId: number, posX: number, posY: number) {
        this.mapObstacleId = mapObstacleId;
        this.mapId = mapId;
        this.obstacleId = obstacledId;
        this.positionX = posX;
        this.positionY = posY;
    }
}