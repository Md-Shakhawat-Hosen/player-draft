// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ player, handlePlayerAddToCart }) => {
  const { name, image, salary, description } = player;
  return (
    <div className=" space-y-3">
      <div className="bg-slate-300 rounded-md">
        <img
          className="p-2 rounded-lg w-full h-[300px] "
          src={image}
          alt=""
        />
        <div className="p-4 space-y-3 text-center">
          <h1 className="font-bold">{name}</h1>
          <p>{description.slice(0, 40)}</p>
          <h2 className="font-bold">
            {" "}
            <span>{salary} </span>BDT
          </h2>
          <button
            onClick={() => handlePlayerAddToCart(player)}
            className="bg-cyan-500 text-white px-2 py-1"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handlePlayerAddToCart: PropTypes.func.isRequired
};

export default Player;