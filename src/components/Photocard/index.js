import React, { useEffect, useRef, useState } from 'react'

const default_image = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Article, ImgWrapper, Button } from "./styles"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"
import { FavButton } from "../FavButton"
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation" 
import { Link } from "@reach/router"

export function Photocard({ src = default_image, likes = 0, id }) {

  const [isShow, reference] = useIntersectionObserver()

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  

  return (
    <Article ref={reference}>
      {
        isShow &&
        <>
          <Link to={`/detail/${id}`} >
            <ImgWrapper>
              <img src={src} />
            </ImgWrapper>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFav = () => {
                    !liked && toggleLike({ variables: { input: { id } } })
                    setLiked(!liked)
                  }

                  return <FavButton onClick={handleFav} liked={liked} likes={likes} />
                }
              }
            </ToggleLikeMutation>
          </Link>
        </>

      }

    </Article>
  )
}
