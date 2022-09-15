import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'

import { theme } from './../theme'

const client = new ApolloClient({
	uri: 'http://localhost:3000/api/graphql',
	cache: new InMemoryCache()
})

const MyApp = ({ Component, pageProps }: AppProps) => {

	return (
		<ThemeProvider theme={theme}>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</ThemeProvider>
	)
}
export default MyApp
