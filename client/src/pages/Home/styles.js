import styled from 'styled-components'

export const Container = styled.div`
    h2 {
        margin-left: 30px;
        margin-top: 70px;
        font-family: var(--itens-font);
    }

`

export const Banner = styled.div`
    background: var(--brand2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    color: var(--brand4);


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

export const Carousel = styled.ul `
    margin: 40px 20px;
    padding: 0px;
    display: flex;
    width: 100vw;
    overflow: scroll;
    scroll-snap-type: x mandatory;

    ::-webkit-scrollbar {
        width: 0px;
    }
`