import React from 'react'
import { Photocard } from "../components/Photocard"

import { gql } from "apollo-boost"
import { Query } from "react-apollo"

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if(loading) return <p>Cargando...</p>
  
  if(error) return <p>Error!</p>
  

  if (data) {
    const { photo = {} } = data
    return <Photocard {...photo} />
  }
  return null
}

export const PhotocardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)