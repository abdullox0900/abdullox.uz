'use client'
import { useInView } from "react-intersection-observer";

import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Introduction from '../components/introduction/Introduction'

import { GlobalStyle } from '../styles/GlobalStyle'

function Page() {

	const { ref, inView } = useInView({
		threshold: 0
	  });

	  if(inView == true) {
		setTimeout(() => {
            inView == true
		}, 2000)
	  }


	return (
		<>
				<GlobalStyle />
				<Header />
				<Hero infoInView={inView} />
				<Introduction scrollRef={ref} />
		</>
	)
}

export default Page
