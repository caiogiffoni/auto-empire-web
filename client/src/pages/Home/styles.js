import styled from 'styled-components'

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