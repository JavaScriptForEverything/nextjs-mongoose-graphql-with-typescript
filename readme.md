### Next.js, TypeScript, Mongoose and GraphQL with ApolloServer


<img
	width = "100%"
	src="https://github.com/JavaScriptForEverything/nextjs-mongoose-graphql-with-typescript/blob/master/public/nextjs-mongoose-graphql-apollo-server.png"
	alt="nextjs-mongoose-graphql-apollo-server.png"
/>
<br />


## Create Next.js project With TypeScript

##### Creating Project
```
$ mkdir my-app && cd my-app 			:
$ yarn init -y 					:

$ yarn add next react react-dom 		: 'react' and 'react-dom' is dependencies of 'next'
$ touch tsconfig.json 				: Enable Support, (Empty file)
$ yarn add -D typescript @types/node @types/react : Add TypeScript dependencies packages

```


###### package.json
```
{
  ...
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
  ...
}


$ yarn dev 					: Start Server [ generate configs in tsconfig.json ]
```

###### code pages/index.tsx 			:

```
const HomePage = () => {

	return (
		<>
		<p>Home Page</p>
		</>
	)
}
export default HomePage
```



##### Enable Absolute import instead of relative import

```
"compilerOptions": {
	"baseUrl" : ".",
	"paths" : {
		"@layout/*" 	: [ "layout/*" ],
		"@components/*" : [ "components/*" ],
		"@store/*" 	: [ "store/*" ],
		"@graphql/*" 	: [ "graphql/*" ],
		"@server/*" 	: [ "server/*" ],
		"@data/*" 	: [ "data/*" ],
		"@util/*" 	: [ "util/*" ],
		"@public/*" 	: [ "public/*" ],
		"@stripe/*" 	: [ "stripe/*" ],
		"@docs/*" 	: [ "docs/*" ],
	},

    "target": "es5",

}
```















## Setup GraphQL with Next.js

###### Install require packages:

```
$ yarn add 	micro 				: We need Seperate Micro Server for Graphql
		graphql 			: Original GraphQL
		apollo-server-micro 		: apollo Server built-on top 'graphql' and micro

		micro-cors 			: Enable CORS on micro service
```



##### /pages/api/graphql.js

```
import { ApolloServer, gql } from 'apollo-server-micro'
import Cors from 'micro-cors'

const cors = Cors()

const book = {
	name: 'Book Name',
	author: 'Book Author'
}

const typeDefs = gql`
	type Query {
		book: Book
	}

	type Book {
		name: String!
		author: String!
	}
`

const resolvers = {
	Query: {
		book: () => book
	}

}

const server = new ApolloServer({
	typeDefs,
	resolvers
})


const startServer = server.start()

const handler = async ( req, res) => {
	if(req.method === 'OPTIONS') return res.end()

	await startServer
	await server.createHandler({ path: '/api/graphql' })(req, res)
}

export default cors(handler)
export const config = {
  api: {
    bodyParser: false,
  },
}

```


###### To Run server and access ApolloServer
	. $ yarn dev

	. (Browser) 	GET 	http://localhost:3000 			: Server Root
	.           	GET 	http://localhost:3000/api/graphql 	: GraphQL Endpoint


###### Get Book from Query

	Run the Query in GraphQL Server's client Request Section
		. Ctrl + Enter 		: to run the Query

```
query ExampleQuery {
  book {
    author
    name
  }
}
```


###### Get Book from Query by axios

```
import axios from 'axios'

import { Book } from '@shared/types'

export const getBook: Promise<Book> = async () => {
	const body = {
		query: `
			query {
				book {
					name
					author
				}
			}
		`,

		variables: {}
	}
	const { data: { data } } = await axios.post<Book>('/api/graphql', body)
	// console.log(data)
	return data.book
}
```
