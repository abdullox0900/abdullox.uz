'use client'
import { useInView } from "react-intersection-observer";

import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Introduction from '../components/introduction/Introduction'

import { GlobalStyle } from '../styles/GlobalStyle'
import styled from "styled-components";

function Page() {

	return (
		<>
			<GlobalStyle />
			<Header />
			<Hero/>
			{/*<Introduction scrollRef={ref} />*/}
		</>
	)
}

export default Page
