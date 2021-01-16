import React from 'react'
import { Anchor, Image } from "./styles"

const default_image = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ path, emoji = '?', cover = default_image }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)