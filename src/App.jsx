
import { useState } from 'react'
import './App.css'
import Cart from './components/cart/Cart'
import Header from './components/header/Header'
import Players from './components/players/Players'

function App() {

  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0)
  const [remainingCost, setRemainingCost] = useState(50000)
  
  const handlePlayerAddToCart = (player) => {
    const isExitDoublePlayer = cart.find(item => item.id === player.id);
    let totalCost = parseInt(player.salary)
    if (isExitDoublePlayer) {
      alert(`${player.name} is already booked`);
    }
     else {
     
    cart.forEach(item => (
       totalCost += parseInt(item.salary)
       
    ))
    
    if (totalCost > 50000) {
      alert('You can not draft player. your remaining balance is insufficient')
      
    }
    else {
      let totalRemaing = remainingCost - parseInt(player.salary);
      //  let totalRemaing = 50000 - totalCost;
        setCart([...cart, player]);
        //  c = c + parseInt(player.salary);
        // console.log(c)
        setCost(totalCost);
        setRemainingCost(totalRemaing);
      
      
    }
     
      
     }
     
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4">
        <Header></Header>
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex">
          <Players handlePlayerAddToCart={handlePlayerAddToCart}></Players>
          <Cart cart={cart} cost={cost} remainingCost={remainingCost}></Cart>
        </div>
      </div>
    </>
  );
}

export default App
