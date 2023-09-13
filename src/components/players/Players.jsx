// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import Player from '../player/Player';

const Players = ({ handlePlayerAddToCart }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);
  return (
    <div className="w-3/4">
      <h1 className='font-bold text-center mb-6'>Total Players: {players.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            handlePlayerAddToCart={handlePlayerAddToCart}
          ></Player>
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {
  handlePlayerAddToCart: PropTypes.func.isRequired
};

export default Players;