// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { TiTickOutline } from "react-icons/ti";

const Cart = ({ cart, cost, remainingCost }) => {
  return (
    <div className="lg:ml- lg:mt-3 absolute lg:absolute text-center lg:top-0 lg:right-0 ">
      <h1 className="text-center font-bold">Player: {cart.length}</h1>

      <div className="bg-slate-500  rounded-xl mt-3 w-[380px] md:w-[700px] lg:w-[300px] md:mx-auto">
        <h1 className="font-bold text-white">Total Cost: {cost}</h1>
        <h1 className="font-bold mb-4 text-white">
          Total Remaining: {remainingCost}
        </h1>
        {cart.map((player) => (
          <div
            key={player.id}
            className="flex justify-center items-center gap-3"
          >
            <div className="bg-cyan-400 p-2 mb-2 text-white rounded-md lg:w-[200px]">
              <h2>{player.name}</h2>
            </div>
            <TiTickOutline className="text-3xl bg-slate-300 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  cost: PropTypes.number,
  remainingCost: PropTypes.number
};

export default Cart;