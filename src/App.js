import React from 'react'
import { Router } from "@reach/router"
import { GlobalStyles } from "./GlobalStyles"

import { Logo } from "./components/Logo"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
import { Favorite } from "./pages/Favorite"
import { Profile } from "./pages/Profile"
import { NotRegisterUser } from "./pages/NotRegisterUser"

function App() {

  const UserLogged = ({ children }) => {
    return children({ isAuth: true })
  }

  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
        
      <UserLogged>
        {
          ({ isAuth }) => 
            isAuth
            ? <Router>
                <Favorite  path="favorites" />
                <Profile path="profile" />
              </Router>
            : <Router>
                <NotRegisterUser path="favorites" />
                <NotRegisterUser path="profile" />
              </Router>
           
        
        }
        
      </UserLogged>
        
        
      <Navbar />
           
           
      

    </div>

  )
}

export default App
