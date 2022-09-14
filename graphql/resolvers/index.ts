import { Book } from '@shared/types'


const book: Book = {
	name: 'CSS in Depth',
	author: 'Keith J. Grant'
}

const resolvers = {
	Query: {
		book: (): Book => book
	}

}

export default resolvers
