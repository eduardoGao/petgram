import React, { useEffect, useRef, useState } from 'react'

const default_image = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
import { MdFavoriteBorder } from "react-icons/md";
import { Article, ImgWrapper, Button } from "./styles"

export function Photocard({ src = default_image, likes = 0 }) {
  const reference = useRef(null)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    // console.log(reference.current)
    const observer = new window.IntersectionObserver((entries) => {
      // console.log(entries)
      const { isIntersecting } = entries[0]
      // console.log(isIntersecting)

      if (isIntersecting) {
        setIsShow(true)
        observer.disconnect()
      }
    })

    observer.observe(reference.current)
  }, [reference])

  return (
    <Article ref={reference}>
      {
        isShow &&
        <>
          <ImgWrapper>
            <img src={src} />
          </ImgWrapper>
          <Button><MdFavoriteBorder size='25px' /> {likes} Likes</Button>
        </>

      }

    </Article>
  )
}
