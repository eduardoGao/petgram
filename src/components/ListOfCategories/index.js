import React, { useEffect, useState } from 'react'
import { Category } from "../Category"
import { List } from "./styles"

import { categories as MockCategories } from "../../../api/db.json"

export function ListOfCategories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://petgram-api-wheat.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
    }
    fetchCategories()
  }, [])

  const renderList = (fixed) => (
    <List className={fixed ? "fixed" : ""}>
      {
        categories.map(category => (
          <li key={category.id}><Category cover={category.cover} emoji={category.emoji} path={category.path} /></li>
        ))
      }
    </List>
  )

  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      isFixed !== newShowFixed && setIsFixed(newShowFixed)
    }

    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)

  }, [isFixed])

  return (
    <>
      {renderList()}
      {isFixed && renderList(true)}
    </>
  )
}
