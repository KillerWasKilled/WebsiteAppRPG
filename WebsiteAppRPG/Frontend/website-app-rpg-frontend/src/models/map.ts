export class Map {

    public name: string;
    
    public width: number;
    public height: number;

    public entranceX: number;
    public entranceY: number;

    public exitX: number;
    public exitY: number;
    
    constructor(name: string, mapWidth: number, mapHeight: number, entranceX: number, entranceY: number, exitX: number, exitY: number) {
        this.name = name;

        this.width = mapWidth;
        this.height = mapHeight;

        this.entranceX = entranceX;
        this.entranceY = entranceY;

        this.exitX = exitX;
        this.exitY = exitY;
    }
}