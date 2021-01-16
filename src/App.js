import React from 'react'
import { GlobalStyles } from "./GlobalStyles"
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotocards } from "./components/ListOfPhotocards"
import { Logo } from "./components/Logo"
function App() {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotocards />
    </div>

  )
}

export default App
