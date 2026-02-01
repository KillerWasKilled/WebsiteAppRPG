export class MapBarrier{

    public mapBarrierId: number;

    public mapId: number;

    public positionX: number;

    public positionY: number;

    constructor(mapBarrierId: number, mapId: number, positionX: number, positionY : number)
    {
        this.mapBarrierId = mapBarrierId;
        this.mapId = mapId;
        this.positionX = positionX;
        this.positionY = positionY;
    }
}
