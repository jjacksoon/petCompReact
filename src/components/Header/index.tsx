import logoImg from '../../assets/logo.png'
import { Container} from './styles';

interface HeaderProps{
  onOpenInscriptionModal: () => void;
}

export function Header({onOpenInscriptionModal}: HeaderProps){
  return(
      <Container>
        <img src={logoImg} alt="PETComp" />
        <button type="button" onClick={onOpenInscriptionModal}>Fazer inscrição</button>
      </Container>
  );
}