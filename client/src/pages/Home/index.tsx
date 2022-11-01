import { ButtonStyle } from "../../components/button";
import RegisterHeader from "../../components/registerHeader";
import { Banner, DivButtons } from "./styles";

export const Home = () => {
  return <>
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
  </>
};
  
  
