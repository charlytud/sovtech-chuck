const axios = require('axios');
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Category {
    value: String
  }

  type Joke {
      name: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    categories: [Category]
  }
`;


const categories = [
    {
      name: 'james',
      author: 'Kate Chopin',
    },
    {
      name: 'johnson',
      author: 'Paul Auster',
    },
  ];


const data = [
    {  
        "categories": [],
        "created_at": "2020-01-05 13:42:20.568859",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "iVjoIAYUTwqcd3STI6nk8A",
        "updated_at": "2020-01-05 13:42:20.568859",
        "url": "https://api.chucknorris.io/jokes/iVjoIAYUTwqcd3STI6nk8A",
        "value": "The Chineese delivery boy tips Chuck Norris."
    },
    {
        "categories": [],
        "created_at": "2020-01-05 13:42:20.568859",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "iVjoIAYUTwqcd3STI6nk8A",
        "updated_at": "2020-01-05 13:42:20.568859",
        "url": "https://api.chucknorris.io/jokes/iVjoIAYUTwqcd3STI6nk8A",
        "value": "The chicken delivery boy tips Chuck Norris."
    }  
];

const res = axios.get(
    'https://api.chucknorris.io/jokes/random',
    {params: {category: 'dev'}}
)
//.then(res => [res.data])
.then( res => res.data);

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      categories: () => res
    },
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
