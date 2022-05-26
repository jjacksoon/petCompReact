import {createGlobalStyle}  from 'styled-components';
import bgImg from '../../src/assets/background.jpg';
export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F0F2F5;
    --blue-dark: #060b3f;
    --blue-light: #00b3ff;
    --text-white: #FFFFFF;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  //Por padrão: font-size: 16px (Desktop)
  //A alteração abaixo, permite que a fonte da aplicação tenha variação de acordo com o tamanho da tela do usuário
  html{
    @media (max-width: 1080px) { //Para telas com até 1080px de largura
      font-size: 93.75%; // 16  *0,9375 = 15px
    }
    @media (max-width: 720px) {  //Para telas com até 720px de largura
      font-size: 87.5%;  // 16 * 0,875 = 14px
    }
  }

  body{
    position: relative;
    background-image: url(${bgImg});
    background-attachment:fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h4,h5,h6, strong{
    font-weight: 600;
  }

  h2{
    font-weight: 400;
    font-weight: bolder;    
  }

  h3{
    font-weight: 400;
  }

  p{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover{
      filter: opacity(0.3);
    }
  }
`;


