import axios from 'axios'

import { Book } from '@shared/types'

export const getBook: Promise<Book> = async () => {
	const body = {
		query: `
			query {
				book {
					name
					author
				}
			}
		`,

		variables: {

		}
	}
	const { data: { data } } = await axios.post<Book>('/api/graphql', body)
	// console.log(data)
	return data.book
}
