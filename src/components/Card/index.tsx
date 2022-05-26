import { Container } from "./styles";


interface CardProps{
  imageName: string;
  imageDescription: string;
  cardTitle: string;
}

export function Card({imageName,imageDescription,cardTitle} : CardProps){
  return(
    <Container>
      <img src={imageName} alt={imageDescription} />
      <h2>{cardTitle}</h2>
      <button type="button">Saiba mais</button>
      {/* <Button buttonTitle={'Saiba mais'}/> */}
    </Container>
   
  )
}