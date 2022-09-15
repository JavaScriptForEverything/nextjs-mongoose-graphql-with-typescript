import { InferGetStaticPropsType } from 'next'
import { Post as PostType } from '@shared/types'
import Post from '@components/post'

import Typography from '@mui/material/Typography'

const PostsHomePage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps> ) => {
	// console.log(posts)

	return (
		<>
		 	<Typography variant='h5'>About page</Typography>

			{posts.map(post => (
				<Post key={post.title} post={post} />
			))}

		</>
	)
}
export default PostsHomePage


export const getStaticProps = async () => {
// export const getServerSideProps = () => {
	const api = 'https://jsonplaceholder.typicode.com/posts'

	const posts: PostType[] = await fetch(api).then(res => res.json())

	return {
		props: { posts }
	}
}