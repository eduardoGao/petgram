import styled from "styled-components"

export const List = styled.ul`
  width: 100%;
  display: flex;
  overflow: scroll;
  /* justify-content: space-between; */
  /* align-items: center; */
  padding: .5em;

  &::-webkit-scrollbar {
    display: none;
  }
`