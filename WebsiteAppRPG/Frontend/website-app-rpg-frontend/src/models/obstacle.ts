export class Obstacle{

    public obstacleId: number;

    public obstacleName: string;

    public isBreakable: boolean;

    constructor(obstacleId: number, obstacleName: string, isBreakable: boolean) {
        this.obstacleId = obstacleId;
        this.obstacleName = obstacleName;
        this.isBreakable = isBreakable;        
    }
}