import React from 'react';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import client from './apollo-client';

const GET_MOVIES = gql`
  query GetMovies {
    movies {
      data {
        id
        attributes {
          title
          release_date
          actors {
            data {
              id
              attributes {
                firstname
                lastname
              }
            }
          }
        }
      }
    }
  }
`;


const Movies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.movies.data.map(({ id, attributes }) => (
    <div key={id}>
      <h2>{attributes.title}</h2>
      <p>Release Date: {attributes.release_date}</p>
      <h3>Actors:</h3>
      <ul>
        {attributes.actors.data.map(actor => (
          <li key={actor.id}>
            {actor.attributes.firstname} {actor.attributes.lastname}
          </li>
        ))}
      </ul>
    </div>
  ));
};

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>Movies</h1>
      <Movies />
    </div>
  </ApolloProvider>
);

export default App;