import Image from 'next/image'
import { Book } from '@shared/types'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type BookComponentProps = {
	book: Book
}

const BookComponent = ({ book }: BookComponentProps) => {

	if(!book) return <></>

	return (
		<>
		 <Box sx={{
			display: 'flex',
			gap: 2,
			mb: 4
		 }}>
			<Box sx={{
				minWidth: 200
			}}>
				<Image src={book.image_url} width={250} height={400}  />
			</Box>

			<Box>
				<Typography variant='h6' color='primary' >{book.name}</Typography>
				<Typography variant='caption' paragraph>{book.author}</Typography>
				<Box sx={{ mb: 2 }}>
					[starIcon] 3.0 / 3.0 	[messageIcon] 0 comments [heartIcon] [bookmarkIcon]
				</Box>
				<Typography color='textSecondary' paragraph>{book.summary}</Typography>
				<Typography color='textSecondary'>{book.description}</Typography>
			</Box>
		 </Box>
		 
		</>
	)
}
export default BookComponent
