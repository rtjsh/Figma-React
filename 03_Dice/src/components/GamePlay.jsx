import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'

function GamePlay() {
  return (
    <MainContainer>
        <div className='topSection'>
        <TotalScore/>
        <NumberSelector/>
        </div>
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