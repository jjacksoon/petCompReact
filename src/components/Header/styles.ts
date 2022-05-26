import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 1120px; */
  background: var(--background);  
  margin: 0 auto;
  padding: 2rem 5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 350px;
    height: 120px;
  }

  button{
    font-size: 1rem;
    color: #FFFFFF;
    background: var(--blue-dark);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover{
      filter: opacity(0.7);
    } 
  }
`;
