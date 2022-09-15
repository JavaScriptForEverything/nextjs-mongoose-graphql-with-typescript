import Link from 'next/link'
import { Post } from '@shared/types'

import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

type PostProps = {
	post: Post
}

const Post = ({ post }: PostProps) => {

	return (
		<>
			<Link href='/posts/[id]' as={`posts/${post.id}`} passHref>
				<MuiLink>
		 			<Typography>{post.id}. {post.title}</Typography>
				</MuiLink>
			</Link>
		</>
	)
}
export default Post
