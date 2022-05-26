import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  margin-top: 4rem;
  padding: 2rem;
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 2rem 0 2rem;

  img{
    margin: 0 auto;
  }
`
export const TextContent = styled.div`
  background-color: var(--background);
  margin-top: 4rem;
  padding: 2rem;
  
  h1{
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p{
    text-align: justify;
  }
`