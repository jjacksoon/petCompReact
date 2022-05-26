import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 18.5rem;
  gap: 2rem;

  img{
    height: 3rem;
  }

  button{
    font-size: 1rem;
    color: #ffffff;
    background: ${(props) => props.color ||  "var(--blue-dark)"};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.7);
    }
  }
`;

export const CardButton = styled.div`
`