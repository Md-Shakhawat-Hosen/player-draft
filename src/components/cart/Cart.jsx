// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cart, cost, remainingCost }) => {
  return (
    <div className="ml-3 p-4 mt-8">
      <h1 className='text-center font-bold'>Player: {cart.length}</h1>
      <h1 className="font-bold">Total Cost: {cost}</h1>
      <h1 className="font-bold mb-4">Total Remaining: {remainingCost}</h1>
      

      {cart.map((player) => (
        <div key={player.id} className="bg-cyan-400 p-3 mb-2 text-white rounded-md">
          <h2>{player.name}</h2>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  cost: PropTypes.number,
  remainingCost: PropTypes.number
};

export default Cart;