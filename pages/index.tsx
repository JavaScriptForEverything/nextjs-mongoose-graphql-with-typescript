import BookList from '@components/booksList'

import Typography from '@mui/material/Typography'

const HomePage = () => {
	return (
		<>
			<Typography variant='h5' color='primary'>Home Page: GraphQL Data</Typography>

			<BookList />

		</>
	)
}
export default HomePage
