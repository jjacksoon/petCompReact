import styled from "styled-components";
import {darken} from 'polished';

export const Container = styled.form`
  h2{
    margin-bottom: 2rem;
    text-align: center;
  }
  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: #bcbcbc;
    }
  }

  h4{
    & + input{
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    & + textarea{
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    & + select{
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: var( --blue-dark);
    color: var(--text-white);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 0.75rem;
    font-weight: 600;
    
    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.7);
    }
  }
  textarea{
    width: 100%;
    height: 10rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
  }
  select{
    width: 100%;
    padding: 0 1.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
  }
`

export const ActivityTypeContainer= styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  button{
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover{
      border-color: ${darken(0.5, "#d7d7d7")};
    }
  }

  img{
    margin-left: 0.3rem;
    height: 30px;
    width: 30px;
  }

  span{
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1rem;
  }

  @media(max-width: 540px){
    display: grid;
    grid-template-columns: 1fr;
  }
`;