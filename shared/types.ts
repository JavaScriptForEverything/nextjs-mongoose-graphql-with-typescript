/*
	{
		id: '1',
		name: 'HTML5 Cookbook',
		author: 'Christopher Schmitt, Kyle Simpson',
		category: 'html',
		image_url: '/images/books/html5_cookbook.jpg',
		summary: 'HTML Cookbook helps you experience HTML5s versatility firsthand. Each informative recipe includes a code solution',
		description: 'Dive deep into the latest HTML5 features that really make the language shine—everything from markup semantics to Canvas, web forms, application protocols, and the latest javascript APIs. With more than 100 practical tips and techniques that you can use in your projects right away, the HTML Cookbook helps you experience HTML5s versatility firsthand. Each informative recipe includes a code solution, along with a detailed discussion into why and how it works. And each chapter has an example design to showcase the topics presented. This handy book is perfect for intermediate to advanced web and mobile web developers ready to take advantage of HTML5 immediately, with recipes on the following topics:Basic web syntax ',
		language: 'english',
		edition: 1,
		year: 2011,
		pages: [252],
		publisher: 'O\'Reilly Media'
	},
*/

// export enum CATEGORIES {
// 	HTML='html',
// 	CSS='css',
// 	JAVASCRIPT='javascript',
// 	TYPESCRIPT='typescript',
// 	REACT='react',
// 	REACT_NATIVE='react-native',
// 	LINUX='linux',
// 	GIT='git',
// 	DOCKER='docker',
// 	MONGODB='mongodb',
// 	NEXTJS='nextjs',
// 	UTIL='util'

// }
export type Book = {
	id: string
	name: string
	author: string
	category: string
	image_url: string
	summary: string
	description: string
	language: string
	edition: number
	year: number
	pages: number[]
	publisher: string
}

