import MapPoint from "./MapPoint";
import ".//map.css";

function MapRow({ pointCount } : { pointCount: number }) {
    let counter: number = 0;

    while (counter < pointCount) {
        return (
            <MapPoint />
        );
    }
}