'use client'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import { GlobalStyle } from '../styles/GlobalStyle'

function Page() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Hero />
		</>
	)
}

export default Page
