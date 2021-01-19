import styled from "styled-components"
import { fadeIn } from "../../styles/animations"

export const ImgWrapper = styled.div`
  border-radius: 1em;
  display: block;
  overflow: hidden;
  height: 0;
  width: 100%;
  padding: 56.25% 0 0 0;
  position: relative;

  & img {
    ${fadeIn()};
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const Button = styled.button`
  margin: .75em;
  display: flex;
  align-items: center;

  & svg {
    margin-right: .35em;
  }
`