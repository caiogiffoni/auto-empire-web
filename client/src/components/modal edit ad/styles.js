import styled from 'styled-components'

export const Container = styled.div`

`

export const DivButton = styled.button`
    display: flex;
    justify-content: space-between;
    border: none;
    padding: 20px 20px 20px 20px;
    background-color: white;

    .btn {
        width: 48%;
        height: 48px;
    }
`

export const DivContent = styled.div`
    padding: 20px 20px;
    max-width: 480px;

    .textField {
        width: 100%;
    }

    .divisors {
        min-width: 100px;
        max-width: 47%;
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

    .title {
        margin-top: 20px;
    }

    .button {
        min-width: 100%;
        margin-top: 20px;
        height: 38px;
        background: #EDEAFD;
        border: 1.5px solid #EDEAFD;
        border-radius: 4px;
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
`