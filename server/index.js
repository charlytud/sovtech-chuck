const axios = require('axios');
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Category {
    name: String
  }

  type Joke {
      value: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    categories: [Category]
    random_joke: [Joke]
  }
`;

const res = axios.get(
  'https://api.chucknorris.io/jokes/categories',
) 
.then(res => res.data.map( name => (`"name": "${name}"`)))
//.then( res => console.log(res));

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const cat = categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"
];

const joke = {
  "categories": [],
  "created_at": "2020-01-05 13:42:19.104863",
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "zGQp6B1wSrmNrE5ijXwVHA",
  "updated_at": "2020-01-05 13:42:19.104863",
  "url": "https://api.chucknorris.io/jokes/zGQp6B1wSrmNrE5ijXwVHA",
  "value": "Chuck Norris was born when the roundhouse kicks were two minutes apart."
}

const resolvers = {
    Query: {
      // categories: () => res,
      // random_joke: () => axios.get(
      //   'https://api.chucknorris.io/jokes/random',
      //   {params: {category: 'dev'}}
      // )
      // .then(res => [res.data])
      categories: cat,
      random_joke: joke
    },
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
