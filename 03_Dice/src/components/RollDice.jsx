import React, { useState } from 'react'
import styled from 'styled-components'


function RollDice({currentDice, Rolldice}) {
  return (
    <DiceContainer>
      <div className='dice' onClick={Rolldice}>
        <img src={`/images/Dice/dice_${currentDice}.png`} alt="dice1" />
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
