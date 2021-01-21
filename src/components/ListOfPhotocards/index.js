import React from 'react'
import { Photocard } from "../Photocard"

import { withPhotos } from "../../hoc/withPhotos"



export function ListOfPhotocardsComponent({ data: { photos = [] } } = {}) {
  // console.log(props)
  return (
    <ul>
      {
        photos.map((photo) => (
          <li key={photo.id}><Photocard {...photo} /></li>
        ))
      }
    </ul>
  )
}

