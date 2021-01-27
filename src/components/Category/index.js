import React from 'react'
import { Link, Image } from "./styles"

const default_image = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ path = '#', emoji = '?', cover = default_image }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)