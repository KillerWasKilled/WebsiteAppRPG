export class MapRouter{

    public mapRouterId: number;

    public mapId: number;

    public enterPositionX: number;

    public enterPositionY: number;

    public exitPositionX: number;

    public exitPositionY: number;

    public destinationMapId :number;

    constructor(mapRouterId: number, mapId: number, enX: number, enY: number, exX: number, exY: number, destinationMapId: number) {
        this.mapRouterId = mapRouterId;
        this.mapId = mapId;
        this.enterPositionX = enX;
        this.enterPositionY = enY;
        this.exitPositionX = exX;
        this.exitPositionY = exY;
        this.destinationMapId = destinationMapId;
    }
}
