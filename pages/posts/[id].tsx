import { Post } from '@shared/types'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Head from 'next/head'

const PostByIdPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {

	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta property="og:title" content={post.title} />

			</Head>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
				<Typography> {post.id} </Typography>
				<Typography> {post.userId} </Typography>
				<Typography> {post.title} </Typography>
				<Typography> {post.body} </Typography>
			
			</Box>
		</>
	)
}
export default PostByIdPage


export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const emptyPost: Post = {
		id: 0,
		userId: 0,
		title: '',
		body: ''
	}

	const { params } = context
	if(!params) return { props: { post: emptyPost}}

	const api = `https://jsonplaceholder.typicode.com/posts/${params.id}`
	const post: Post = await fetch(api).then(res => res.json())

	return { props : { post }}
}

export const getStaticPaths: GetStaticPaths = async () => {

	const api = `https://jsonplaceholder.typicode.com/posts/`
	const posts: Post[] = await fetch(api).then(res => res.json())

	const paths = posts.map( post => ({
		params: { id: post.id.toString() }
	}))

	return {
		paths,
		fallback: false
	}

}