import styled, { keyframes } from "styled-components"

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
    filter: blur(2px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
`

export const ImgWrapper = styled.div`
  border-radius: 1em;
  display: block;
  overflow: hidden;
  height: 0;
  width: 100%;
  padding: 56.25% 0 0 0;
  position: relative;

  & img {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    animation: 1s ${fadeInKeyframes} ease-in-out;
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