import styled from "styled-components";

const SearchResult = () => {
  return (
    <div>
      <FoodCardContainer>
              <FoodCards></FoodCards>
      </FoodCardContainer>
    </div>
  )
}

export default SearchResult

const FoodCardContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div`
  
`;