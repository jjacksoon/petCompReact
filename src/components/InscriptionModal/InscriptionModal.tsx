import Modal from 'react-modal';
import { Container, ActivityTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import monitoringCardImg from '../../assets/monitoria.png'; //imagem monitoria
import podcastCardImg from '../../assets/podcast.png';  //imagem podcast
import softwareCardImg from '../../assets/software.png';  //imagem desenvolvimento

interface InscriptionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function InscriptionModal({isOpen, onRequestClose} : InscriptionModalProps){
  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>

     {/* Cria formulário */}
     
      <Container>  
        <h2>Cadastro seletivo 2022.2</h2>
        <h4>Nome Completo</h4>
        <input placeholder='Nome completo'/>
        <h4>E-mail</h4>
        <input placeholder='E-mail institucional'/>
        <h4>Telefone</h4>
      
        <input placeholder='(98) 9999-9999'type="tel"/>
        <h4>Período que está cursando</h4>        
        <select name="Período">
          <option value="" disabled selected></option>
          <option value="2º Período">2º Período</option>
          <option value="3º Período">3º Período</option>
          <option value="4º Período">4º Período</option>
          <option value="5º Período">5º Período</option>
          <option value="6º Período">6º Período</option>
        </select>
        <h4>Atividade para realizar a etapa prática do seletivo</h4>
        
        <ActivityTypeContainer>
          <button type="button">
            <img src={softwareCardImg} alt="Desenvolvimento" />
            <span>Desenvolvimento</span>
          </button>

          <button type="button">
            <img src={monitoringCardImg} alt="Monitoria" />
            <span>Monitoria</span>
          </button>

          <button type="button">
            <img src={podcastCardImg} alt="`Podcast`" />
            <span>Podcast</span>
          </button>
        </ActivityTypeContainer>

        <h4>Fale brevemente por que você deseja fazer parte do programa?</h4>
        <textarea rows={5}></textarea>
        <button type="submit">Enviar</button>
      </Container>
    </Modal>
  );
}