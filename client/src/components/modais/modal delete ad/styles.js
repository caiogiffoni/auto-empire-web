import styled from 'styled-components'

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

export const DivContent = styled.div`
    padding: 20px 20px;
`