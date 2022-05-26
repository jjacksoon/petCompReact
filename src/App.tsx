import { Header } from './components/Header/';
import { About } from './components/About';
import { GlobalStyle } from './styles/global';
import { Activities } from './components/Activities';
// import { Footer } from './components/Footer/Footer';
import { useState } from 'react';
// import { InscriptionModal } from './components/InscriptionModal/InscriptionModal';


export function App() {
  const[isInscriptionModalOpen, setIsInscriptionModalOpen] = useState(false);
  
  function handleOpenInscriptionModal(){
    setIsInscriptionModalOpen(true);
  }
  function handleCloseInscriptionModal(){
    setIsInscriptionModalOpen(false);

  }
  return (
    <>
      <Header onOpenInscriptionModal={handleOpenInscriptionModal}/>
      <About/>
      <Activities/>

      {/* <InscriptionModal isOpen={isInscriptionModalOpen} onRequestClose={handleCloseInscriptionModal}/>
      <Footer/>  */}
      <GlobalStyle/>     
    </>
      
  
  );
}

