import React, { useEffect, useState } from 'react'
import { Category } from "../Category"
import { List } from "./styles"

import { categories as MockCategories } from "../../../api/db.json"

export function ListOfCategories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://petgram-api-wheat.vercel.app/categories")
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <List>
      {
        categories.map(category => (
          <li key={category.id}><Category cover={category.cover} emoji={category.emoji} path={category.path} /></li>
        ))
      }
    </List>
  )
}
