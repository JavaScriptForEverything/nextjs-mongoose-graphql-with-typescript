import { ApolloServer } from 'apollo-server-micro'
import cors from 'micro-cors'
import database from '@server/models/database'

import typeDefs from '@graphql/typeDefs'
import resolvers from '@graphql/resolvers'

database() 		// create database connection



const server = new ApolloServer({ typeDefs, resolvers })
const startServer = server.start()

const handler = async ( req, res) => {
	if(req.method === 'OPTIONS') return res.end()

	await startServer
	await server.createHandler({ path: '/api/graphql' })(req, res)
}

export default cors()(handler)
export const config = { api: { bodyParser: false, } }
