import { ButtonStyle } from "../../components/button";
import RegisterHeader from "../../components/registerHeader";
import { Banner, Container, DivButtons } from "./styles";
import { CarouselHome } from "../../components/carousel";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../services";

export const Home = () => {
    const [data, setData] = useState([])
    const [motorbike, setMotorbike] = useState([])
    const [car, setCar] = useState([])

    const displayProducts = useCallback( () => {
        api.get(`/vehicle`)
        .then((response) => setData(response.data))
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        displayProducts()
        setCar(data.filter((item) => item['type'] === 'car'))
        setMotorbike(data.filter((item) => item['type'] === 'motorbike')) 

    }, [])

    console.log(motorbike)
    console.log(car)

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
            <CarouselHome data={car}/>
        <h2>Motos</h2>
            <CarouselHome data={motorbike}/>
    </Container>
  )
};
  
  
