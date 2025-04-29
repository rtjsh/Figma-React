import React, { useState } from 'react'
import styled from 'styled-components'

function RollDice() {

    const [currentDice, setcurrentDice]= useState(1);

    const generateRandomNumber = (min,max)=>{
        return Math.floor(Math.random() * (max-min) + min);
        console.log(Math.floor(Math.random() * (max-min) + min));
    }
    
    


  return (
    <DiceContainer>
      <div className='dice' onClick={()=> generateRandomNumber(1,6)}>
        <img src="/images/dice_1.png" alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 55px;

.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
}


`
