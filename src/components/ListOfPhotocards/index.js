import React from 'react'
import { Photocard } from "../Photocard"

export function ListOfPhotocards() {
  return (
    <ul>
      {
        [1, 2, 3].map((id) => (
          <li key={id}><Photocard /></li>
        ))
      }
    </ul>
  )
}
