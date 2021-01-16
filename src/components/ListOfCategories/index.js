import React from 'react'
import { Category } from "../Category"
import { List } from "./styles"

import { categories } from "../../../api/db.json"

export function ListOfCategories() {
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
