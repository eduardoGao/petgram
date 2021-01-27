import React from 'react'
import { PhotocardWithQuery } from "../container/PhotocardWithQuery"

export const Detail = ({ detailId }) => {
    return(
        <PhotocardWithQuery id={detailId} />
    )
}