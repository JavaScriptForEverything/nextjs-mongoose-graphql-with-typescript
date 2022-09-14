import { useQuery } from '@apollo/client'
import BookComponent from '@components/book'
import { getBooksQuery } from '@graphql/queries'
import { Book } from '@shared/types'

import Typography from '@mui/material/Typography'

type ReturnQueryTypes = {
	books: Book[]
}

const BookList = () => {
	const { loading, error, data } = useQuery<ReturnQueryTypes>(getBooksQuery)

	if(loading) return <span>loading....</span>
	if(error) return <span>Error Page</span>

	return (
		<>
			{data.books.map((book: Book) => <BookComponent 
				key={book.id}
				book={book}
			/>)}
		</>
	)
}
export default BookList
