import React from 'react'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "../Photocard/styles"

export const FavButton = ({ onClick, liked, likes }) => {
    return(
        <Button onClick={onClick}>
              {
                !liked
                  ? <MdFavoriteBorder size='25px' />
                  : <MdFavorite size='25px' />
              }
              {likes} Likes
          </Button>
    )
}