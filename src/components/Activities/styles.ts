import styled from "styled-components";

export const Container = styled.div`
  /* background-color: var(--background); */
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
`;