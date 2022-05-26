import { Container } from "./styles";

interface InformationProps{
  information: string;
  informationImg: string;
  informationDescription: string;
}

export function Information({information, informationImg, informationDescription} : InformationProps){
  return(
    <Container>
      <img src={informationImg} alt={informationDescription} />
      <p>{information}</p>
    </Container>
  );
}