import styled, { css } from "styled-components"
import { fadeIn } from "../../styles/animations"

export const List = styled.ul`
  width: 100%;
  display: flex;
  overflow: scroll;
  /* justify-content: space-between; */
  /* align-items: center; */
  padding: .5em;

  ${props => props.fixed && css`
    {
      background: #fff;
      border-radius: 1em;
      box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.3);
      position: fixed;
      z-index: 1;
      transform: scale(.65);
      top: -10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      max-width: 400px;
      ${fadeIn({ time: '.75s' })};
    }
  `}


  &::-webkit-scrollbar {
    display: none;
  }
`