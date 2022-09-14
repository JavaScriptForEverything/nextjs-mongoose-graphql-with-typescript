import { useQuery } from '@apollo/client'
import { getBooksQuery } from '@graphql/queries'


const HomePage = () => {
	const { loading, error, data } = useQuery(getBooksQuery)

	if(loading) return <span>loading....</span>
	if(error) return <span>Error Page</span>
	// console.log(data.books)


	return (
		<>
			<p>Home Page: GraphQL Data</p>

			<pre>
				{JSON.stringify(data.books, null, 2)}
			</pre>
		</>
	)
}
export default HomePage
