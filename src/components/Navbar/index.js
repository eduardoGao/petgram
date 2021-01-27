import React from 'react'
import { Nav, Link } from "./styles"
import { MdPersonOutline, MdHome, MdFavoriteBorder } from "react-icons/md"

const SIZE = "32px"

export const Navbar = () => {
    return (
        <Nav>
            <Link to="/"><MdHome size={SIZE} /></Link>
            <Link to="/favorites"><MdFavoriteBorder size={SIZE} /></Link>
            <Link to="profile"><MdPersonOutline size={SIZE} /></Link>
        </Nav>
    )
}
