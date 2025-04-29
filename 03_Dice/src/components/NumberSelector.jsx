import React, { useState } from 'react'
import styled from 'styled-components'

function NumberSelector() {
    const arrNumber = [1,2,3,4,5,6]
    const [selectedNumber, setSelectedNumber] = useState()
    console.log(selectedNumber);
    
    
  return (
    <NumberSelectorContainer>
      <div className='flex'>
        {
            arrNumber.map((value,i)=>(
                <Box 
                isselected = {value === selectedNumber}
                key={i}
                onClick={()=> setSelectedNumber(value)}
                >{value}</Box>
            ))
        }
        {/* Same as above */}
      {/* <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box> */}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
  .flex{
    display: flex;
    gap: 24px;

  }
  p{
    font-size: 24px;
    font-weight: 700px;
    display: flex;
    flex-direction: row-reverse;
  }
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>props.isselected?"black":"white"};
    color: ${(props)=>props.isselected?"white":"black"};
`;
