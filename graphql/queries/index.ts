import { gql } from '@apollo/client'

export const getBooksQuery = gql`
	query {
		books { 			# Get all fields name from GraphQL ServerSide Query
			id
			name
			author
			category
			image_url
			summary
			description
			language
			edition
			year
			pages
			publisher
		}
	}
`