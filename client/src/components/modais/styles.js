import styled from 'styled-components'

export const Container = styled.div`
`

export const DivContent = styled.div`
    padding: 20px 20px;
    max-width: 480px;

    .description {
        font-family: var(--itens-font);
        font-size: 14px;
    }

    .textField {
        width: 100%;
    }

    .divisors, .divisors2 {
        min-width: 100px;
        max-width: 48%;
    }

    #price {
        min-width: 100%;
    }

    .info {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
    }

    .title1, .title2 {
        font-family: var(--itens-font);
        font-weight: var(--body-1-600);
        font-size: 14px;
    }

    .title2 {
        margin-top: 20px;
    }

    .button {
        min-width: 100%;
        margin-top: 20px;
        height: 38px;
        color: var(--brand1);
        background: var(--brand4);
        border: 1.5px solid var(--brand4);
        border-radius: 4px;
        font-size: 14px;
        font-weight: var(--body-1-600);
    }

    @media screen and (min-width: 450px) {
        .divisors, #price {
            min-width: 100px;
            max-width: 31%;
        }
    }
`

export const DivButtonCenter = styled.div`
    display: flex;
    justify-content: space-between;
    border: none;
    padding: 20px 0px;
    background-color: white;

    button {
        min-width: 48%;
        height: 48px;
    }

    #primary {
        background-color: var(--brand1);
        border-color: var(--brand1);
        color: var(--whiteFixed);
    }

    #secondary {
        background-color: var(--whiteFixed);
        border-color: var(--grey5);
        color: var(--random13);
    }
`

export const DivButton = styled.button`
    display: flex;
    justify-content: right;
    border: none;
    padding: 20px 20px;
    background-color: white;

    .btn + .btn {
        margin-left: 10px;
    }

    .btn {
        flex-wrap: nowrap;
        height: 48px;
    }

    #primary {
        background-color: var(--brand1);
        border-color: var(--brand1);
        color: var(--whiteFixed);
    }

    
    #secondary {
        background-color: var(--whiteFixed);
        border-color: var(--grey5);
        color: var(--random13);
    }

    #tertiary {
        background-color: var(--grey6);
        border-color: var(--grey6);
        color: var(--random13);
    }

    #quarternary {
        background-color: var(--alert2);
        border-color: var(--alert2);
        color: var(--alert1);
    }

`