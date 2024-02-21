import React, { useState } from 'react';

import Dice1 from "../assets/img/Dice1.png";
import Dice2 from "../assets/img/Dice2.png";
import Dice3 from "../assets/img/Dice3.png";
import Dice4 from "../assets/img/Dice4.png";
import Dice5 from "../assets/img/Dice5.png";
import Dice6 from "../assets/img/Dice6.png";
import StartMeme from "../assets/img/startTHeGame.png";

const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, StartMeme];

function Dice() {
    const [diceValue, setDiceValue] = useState(0);
  
    function rollDice() {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
    };
    // used this as a logic but not needed now 
    const gameStart = () => {
        return (
            <div className='flex justify-center items-center'>
                <div className='text-center'>
                    <img src={StartMeme} alt={`Dice ${diceValue}`} />
                    <p>hey start</p>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={rollDice}>Roll Dice</button>
                </div>      
            </div>
        );
    };

    if (diceValue === 0) {
        return (
            <div>
                {gameStart()}
            </div>
        );
    }

  
    return (
      <div className='flex justify-center items-center'>
        <div className='text-center'>
        <img src={diceImages[diceValue - 1]} alt={`Dice ${diceValue}`} />
        <p>Result: {diceValue}</p>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={rollDice}>Roll Dice</button>
        </div>      
      </div>
    );
  };
  
  export default Dice;