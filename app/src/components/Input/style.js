import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #fafafa;
    border-radius: 20px;

    height: 62px;
    width: 80%;

    margin: 25px;

    input {
        background: transparent;
        border: none;
        width: 100%;
        padding: 0 20px;
        height: 62px;
        color: #fff;
        font-size: 20px;
        
    }

    input:focus {
        outline: none;
    }
    
`
export const InputButton = styled.button`
        height: 62px;
        width: 80%;

        margin: 20px;
        
        height: 62px;
        background: #fff;
        border-radius: 50px;
        color: #000;
        font-size: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
        background: #fafafa40;
        cursor: pointer;
        }


`