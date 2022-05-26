import { Card } from "../Card";
import monitoringCardImg from '../../assets/monitoria.png';
import podcastCardImg from '../../assets/podcast.png';
import softwareCardImg from '../../assets/software.png';
import eventsCardImg from '../../assets/eventos.png';
import workshopsCardImg from '../../assets/minicurso.png';
import articlesCardImg from '../../assets/escrita.png';
import { Container, CardsGroup } from "./styles";


export function Activities(){
  return(
    <Container>
      <h1>Atividades</h1>
      <CardsGroup>
        <Card
          imageName={monitoringCardImg}
          imageDescription={'Monitoria'}
          cardTitle={'Monitoria'}/>
        <Card
          imageName={podcastCardImg}
          imageDescription={'Podcast'}
          cardTitle={'Podcast'}/>
        <Card
          imageName={softwareCardImg}
          imageDescription={'Fábrica de Software'}
          cardTitle={'Fábrica de Software'}/>
        <Card
          imageName={eventsCardImg}
          imageDescription={'Eventos'}
          cardTitle={'Organização de Eventos'}/>
        <Card
          imageName={workshopsCardImg}
          imageDescription={'Oficinas e minicursos'}
          cardTitle={'Minicursos e Oficinas'}/>
        <Card
          imageName={articlesCardImg}
          imageDescription={'Expressão escrita'}
          cardTitle={'Expressão Escrita'}/>
      </CardsGroup>
    </Container>
  );
}