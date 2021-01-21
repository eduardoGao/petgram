import React from 'react'
import { Photocard } from "../components/Photocard"

import { gql } from "apollo-boost"
import { Query } from "react-apollo"

const query = gql`
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

export const PhotocardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        if (data) {
          const { photo = {} } = data
          return <Photocard {...photo} />
        }
        return null
      }

    }
  </Query>
)