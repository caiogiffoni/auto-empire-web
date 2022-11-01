import { ButtonStyle } from "../../components/button";
import { CardAuto } from "../../components/card";
import RegisterHeader from "../../components/registerHeader";
import { Banner, Carousel, Container, DivButtons } from "./styles";

export const Home = () => {
  return (
    <Container>
        <RegisterHeader/>
        <Banner>
            <h1>Velocidade e experiência em um lugar feito para você</h1>
            <p>Um ambiente feito para você e o seu melhor</p>
            <DivButtons>
                <ButtonStyle>Leilão</ButtonStyle>
                <ButtonStyle>Carros</ButtonStyle>
                <ButtonStyle>Motos</ButtonStyle>
            </DivButtons>
        </Banner>
        <h2>Carros</h2>
        <Carousel>
            <CardAuto/>
            <CardAuto/>
            <CardAuto/>
            <CardAuto/>
            <CardAuto/>
            <CardAuto/>
        </Carousel>
        <h2>Motos</h2>
        <Carousel>
            <CardAuto/>
            <CardAuto/>
            <CardAuto/>
            <CardAuto/>
            <CardAuto/>
            <CardAuto/>
        </Carousel>
    </Container>
  )
};
  
  
