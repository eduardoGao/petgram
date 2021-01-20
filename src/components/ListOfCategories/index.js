import React, { useEffect, useState } from 'react'
import { Category } from "../Category"
import { List } from "./styles"
import { SpinerSVG } from "../Spiner"

import { categories as MockCategories } from "../../../api/db.json"

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://petgram-api-wheat.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
      setLoading(false)
    }
    fetchCategories()
  }, [])

  return { categories, loading }
}

export function ListOfCategories() {
  const { categories, loading } = useCategoriesData()


  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      isFixed !== newShowFixed && setIsFixed(newShowFixed)
    }

    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)

  }, [isFixed])

  const renderList = (fixed) => (
    loading
      ? <SpinerSVG />
      : <List fixed={fixed}>
        {
          categories.map(category => (
            <li key={category.id}><Category cover={category.cover} emoji={category.emoji} path={category.path} /></li>
          ))
        }
      </List>
  )

  return (
    <>
      {renderList()}
      {isFixed && renderList(true)}
    </>
  )
}
