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

  @media(max-width: 300px){
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 2rem;

    img{
      width: 100px;
      height: 100px;
    }

    h1{
      font-size: 1.5rem;
    }

    p{
      font-weight: 400;
    }
  }

  @media(min-width: 300px) and (max-width: 900px){
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 2rem;    

    img{
      width: 150px;
      height: 150px;
    }

    p{
      font-weight: 400;
    }
    
  }

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