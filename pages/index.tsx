import { useEffect, useState } from 'react'
import * as productReducer from '@store/productReducer'
import { Book } from '@shared/types'

const HomePage = () => {
	const [ book, setBook ] = useState<Book>({
		name: '',
		author: ''
	})

	useEffect(() => {
		(async() => {
			setBook( await productReducer.getBook() )
		})()
	}, [])

	return (
		<>
		<p>Home Page: GraphQL Data</p>

		<p>
			<span>{book.name}</span> <span>{book.author}</span>
		</p>
		</>
	)
}
export default HomePage
