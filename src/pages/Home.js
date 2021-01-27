import React from 'react'
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotocards } from "../container/ListOfPhotocards"

export const Home = ({ id }) => {
    return(
    <>
        <ListOfCategories />
        <ListOfPhotocards categoryId={id} />
    </>
    )
}