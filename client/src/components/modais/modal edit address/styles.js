import styled from 'styled-components'

export const Container = styled.div`

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

    .info {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
    }

    .title {
        margin-top: 20px;
    }
`

export const DivButton = styled.button`
    display: flex;
    justify-content: right;
    border: none;
    padding: 20px 20px 20px 20px;
    background-color: white;

    .btn {
        height: 48px;
    }

    .btn + .btn {
        margin-left: 15px;
    }
`