import { gql } from 'apollo-server-micro'

const typeDefs = gql`
	type Query {
		book: Book
	}

	type Book {
		name: String!
		author: String!
	}
`

export default typeDefs
