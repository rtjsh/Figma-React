import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'

function GamePlay() {
  const [score, setScore] = useState();
  const generateRandomNumber = (min,max)=>{
    return Math.floor(Math.random() * (max-min) + min);
}

const Rolldice = ()=>
{
    const randomNumber= generateRandomNumber(1,7)

    setcurrentDice((prev)=> randomNumber)
}


  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setcurrentDice]= useState(1);
  return (
    <MainContainer>
        <div className='topSection'>
        <TotalScore/>
        <NumberSelector
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}/>
        </div>
        <RollDice
        currentDice={currentDice}
        Rolldice={Rolldice}
        />
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
  .topSection{
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
  }
`