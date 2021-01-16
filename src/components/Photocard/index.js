import React from 'react'

const default_image = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
import { MdFavoriteBorder } from "react-icons/md";
import { ImgWrapper, Button } from "./styles"

export function Photocard({ src = default_image, likes = 0 }) {
  return (
    <article>
      <ImgWrapper>
        <img src={src} />
      </ImgWrapper>
      <Button><MdFavoriteBorder size='25px' /> {likes} Likes</Button>
    </article>
  )
}
