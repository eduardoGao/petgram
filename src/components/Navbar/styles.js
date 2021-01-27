import styled from "styled-components"
import { Link as LinkRouter } from "@reach/router"
import { fadeIn } from "../../styles/animations"

export const Nav = styled.nav`
    background: #f2f2f2;
    border-radius: 1em;
    max-width: 400px;
    height: 90px;
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    right:0;
    margin: 1.5em auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Link = styled(LinkRouter)`
    color: #888;
    height: 100%;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &[aria-current] {
        color: #000;

        &:after {
            ${fadeIn({time: '.4s'})};
            content: '.';
            position: absolute;
            bottom: 25px;
            font-size: 34px;
            line-height: 20px;
        }
    }
`