import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem;

  h1{
    color: var(--text-white);
    margin-bottom: 3rem;
  }
`;
export const CardsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;


  @media(max-width: 400px){
    display: flex;
    flex-direction: column;
  }

  @media(min-width: 400px) and (max-width: 720px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    
  }

  img{
    margin: 0 auto;
  }
`;