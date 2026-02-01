export class Map {

    public mapId: number;

    public name: string;
    
    public width: number;
    
    public height: number;
    
    constructor(mapId: number, name: string, mapWidth: number, mapHeight: number) {
        this.mapId = mapId;
        this.name = name;
        this.width = mapWidth;
        this.height = mapHeight;
    }
}