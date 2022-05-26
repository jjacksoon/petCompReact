import iconImg from "../../assets/icon.png"
import { Container, Content, TextContent } from "./styles";
export function About(){
  return(
    <Container>
      <Content>
        <img src={iconImg} alt="Logo" />
        <TextContent>
          <h1>Conheça o PETComp</h1>
          <p>O Programa de Educação Tutorial de Ciência da Computação da UFMA foi criado em 1 de Setembro de 2007, tendo como tutor o professor Alexandre César Muniz de Oliveira, em 19 de Janeiro de 2016 o professor Geraldo Braz Junior tornou-se o novo tutor do grupo. E após sua excelente gestão, em 2019 assume o professor Luis Rivero. O PET Computação já realizou diversas atividades de pesquisa, ensino e extensão. Dentre algumas das atividades podemos citar minicursos, Projetos de Extensão, como por exemplo, ensino de pensamento computacional, organiza o Encontro Acadêmico de Computação (EAComp), desenvolvimento de sistemas, entre outros.</p>
        </TextContent>
      </Content>
    </Container>

  );
}