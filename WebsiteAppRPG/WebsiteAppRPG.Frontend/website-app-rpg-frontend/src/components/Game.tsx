import { useEffect, /*useRef,*/ useState } from "react";

import { Player } from "../models/player";

import { fetchPlayers } from "../api/playerApi";

export default function Game() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetchPlayers()
      .then(data => setPlayers(data))
      .catch(err => console.error("fetchPlayers error:", err));
  }, []);

  return(
    <ul>
      {players.map(player => (
        <li>
          {player.name + " | " + player.playerPositionX + " | " + player.playerPositionY}
        </li>
      ))}
    </ul>
  );
}

/*
    <div>
      <ul>
        {players.map(player => (
          <li>
            {player.name + " | " + player.playerPositionX + " | " + player.playerPositionY}
          </li>
        ))}
      </ul>
      <div id="current-map">
        {mapWidth.map((map) => (
          <div>
            {map}
          </div>
        ))}
      </div>
    </div>
    */