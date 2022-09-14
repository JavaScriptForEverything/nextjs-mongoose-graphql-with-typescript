import { ApolloServer, gql } from 'apollo-server-micro'
import Cors from 'micro-cors'

const cors = Cors()

const book = {
	name: 'Book Name',
	author: 'Book Author'
}

const typeDefs = gql`
	type Query {
		book: Book
	}

	type Book {
		name: String!
		author: String!
	}
`

const resolvers = {
	Query: {
		book: () => book
	}

}

const server = new ApolloServer({
	typeDefs,
	resolvers
})


const startServer = server.start()

const handler = async ( req, res) => {
	if(req.method === 'OPTIONS') return res.end()

	await startServer
	await server.createHandler({ path: '/api/graphql' })(req, res)
}

export default cors(handler)
export const config = {
  api: {
    bodyParser: false,
  },
}
