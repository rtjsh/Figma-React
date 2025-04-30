import React from 'react'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <TopContainer>
          <div className='logo'>
            <img src="/logo.svg" alt="logo" />
          </div>

          <div className='search'>
            <input type="text" placeholder='Search Food'/>
          </div>
      </TopContainer>
      <FilterContainer>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
      </FilterContainer>

    </Container>
  )
}

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  display:flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  min-height: 140px;

  .search{
    input{background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;}
  }
`;


const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;