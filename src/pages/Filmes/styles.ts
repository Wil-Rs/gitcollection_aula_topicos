import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`

export const Formulario = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    input {
        display: block;
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 5px 0px 0px 5px;
        color: #3a3a3a;
        border-right: 0;
    }
    button {
        width: 160px;
        background-color: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: bold;
    }
`

export const FilmesList = styled.div `
    margin-top: 80px;
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
    div {
        margin-left: 10px;
        max-width: 200px;
        width: 200px;
        padding: 5px;
        margin: 5px;

        img {
            width: 200px;
            /* box-shadow: 2px 2px 2px black; */
        }
        
        div {
            box-shadow: 5px 5px 5px black;

        }
    }

`