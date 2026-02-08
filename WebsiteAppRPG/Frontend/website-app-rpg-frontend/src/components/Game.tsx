import { useEffect, /*useRef,*/ useState } from "react";

import { Player } from "../models/player";

import { fetchPlayers } from "../apis/playerApi";

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
          {`${player.playerId} | ${player.email} | ${player.name} | ${player.password}`}
        </li>
      ))}
    </ul>
  );
}