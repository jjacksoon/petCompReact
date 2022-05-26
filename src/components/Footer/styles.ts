import styled from "styled-components";

export const Container  = styled.footer`
  padding:  2rem 2rem 2rem 20rem;
  background: var(--blue-dark);
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  .logo-img{
    height: 10rem;
  }
  button{
    font-size: 1rem;
    color: #ffffff;
    background: var(--blue-light);
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
export const InformationContent  = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p{
    width: 18.75rem;
  }
`;