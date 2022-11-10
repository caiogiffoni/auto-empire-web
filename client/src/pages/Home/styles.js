import styled from 'styled-components'

export const Container = styled.div`
    h2 {
        margin-left: 30px;
        margin-top: 70px;
        font-family: var(--itens-font);
    }

    .divCarousel {
        display: flex;
    }


    .swipe1, .swipe2 {
        border: none;
        background: transparent;

        img {
            width: 30px;
            height: 50px;
        }

        @media screen and (max-width: 1024px) {
            display: none;
        }
    }

    .swipe2 {
        right: 30px;
    }
    
`

export const Banner = styled.div`
    background: var(--brand2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--brand4);
    padding: 30px;


    h1, p {
        font-family: var(--itens-font);
        max-width: 550px;
        text-align: center;
    }

    h1 {
        line-height: 45px;
    }
`
export const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;

    button {
        width: 90%;
        border: 1px solid white;
        background: transparent;
        margin-bottom: 10px;
    }

    @media screen and (min-width: 550px) {
        flex-direction: row;
        justify-content: center;

        button {
            width: 150px;
        }

        button + button {
            margin-left: 20px;
        }
    }
`

export const Carousel = styled.div `
    margin: 40px 20px;
    padding: 0px;
    display: flex;
    width: 100vw;
    overflow: scroll;
    scroll-snap-type: x mandatory;
    position: relative;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        width: 0px;
    }
`