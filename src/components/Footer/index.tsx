import { Container, InformationContent } from "./styles";
import addressImg from '../../assets/address.png';
import emailImg from '../../assets/email.png';
import instagramImg from '../../assets/instagram.png';
import twitterImg from '../../assets/twitter.png';
import ufmaImg from '../../assets/ufma.png';
import { Information } from "../Information";

export function Footer(){
  return(
    <Container>
      <img className="logo-img" src={ufmaImg} alt="Logo UFMA" />
      <InformationContent>
        <Information
          information={'Av. dos Portugueses, 1966 - Vila Bacanga, São Luís - MA, 65080-805, CCET - Bloco 2 '}
          informationImg={addressImg}
          informationDescription={'Endereço'}
        />
        <Information
          information={'petcomputacao.ufma@gmail.com'}
          informationImg={emailImg}
          informationDescription={'Email'}
        />
        <Information
          information={'@PetCompUfma'}
          informationImg={instagramImg}
          informationDescription={'Instagram'}
        />
        <Information
          information={'@PetCompUfma'}
          informationImg={twitterImg}
          informationDescription={'Twitter'}
        />
        <button type="button">Fale Conosco</button>
      </InformationContent>

    </Container>
  );
}