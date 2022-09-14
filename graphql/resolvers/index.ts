import { Book } from '@shared/types'
import { books } from '@data/books'



const resolvers = {
	Query: {
		books: () => books
	}

}

export default resolvers
