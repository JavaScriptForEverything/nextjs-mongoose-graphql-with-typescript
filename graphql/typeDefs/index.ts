import { gql } from 'apollo-server-micro'

const typeDefs = gql`
	type Query {
		books: [Book]
	}

	type Book {
		id: String!
		name: String!
		author: String!
		category: String!
		image_url: String!
		summary: String!
		description: String!
		language: String
		edition: Int!
		year: Int!
		pages: [Int!]!
		publisher: String
	}
`

export default typeDefs
