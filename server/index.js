const axios = require('axios');
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Category {
    name: [String!]
  }

  type Joke {
      value: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    categories: [Category]
    random_joke: [Joke]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const resolvers = {
    Query: {
      categories: () => axios.get(
        'https://api.chucknorris.io/jokes/categories',
      ) 
      .then(res => res.data),
      //.then(name => console.log(name)),

      random_joke: () => axios.get(
        'https://api.chucknorris.io/jokes/random',
        {params: {category: 'dev'}}
      )
      .then(res => [res.data])
    },
  };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
