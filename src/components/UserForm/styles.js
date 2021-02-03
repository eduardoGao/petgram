import styled from 'styled-components'

export const Form = styled.form`
    padding: 1em;

    & input {
        background: #f2f2f2;
        display: block;
        width: 100%;
        height: 2.5em;
        padding: 1.5em .75em;
        margin-bottom: 1em;
        border: none;
        border-radius: .5em;
        color: #a23abb;


        &:focus {
            border: none;
            border: 1px solid #f2f2f2;
            //background: red;
        }
    }
`

export const Button = styled.button`
    font-family: inherit;
    color: white;
    background: #a23abb;
    width: 100%;
    padding: 1em;
    border-radius: .5em
`

export const Title = styled.h2`
    margin-bottom: .5em;
    font-size: 1.2em;
`