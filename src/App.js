import React from 'react'
import { GlobalStyles } from "./GlobalStyles"
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotocards } from "./container/ListOfPhotocards"
import { Logo } from "./components/Logo"
import { PhotocardWithQuery } from "./container/PhotocardWithQuery"

function App() {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')


  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotocardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotocards categoryId={2} />
          </>
      }

    </div>

  )
}

export default App
