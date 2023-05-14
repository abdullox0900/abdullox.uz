import { Container } from '../container/Container'
import Technologies from '../technologies/Technologies'
import { Desc, IntroductionWrap, Title, TitleTop } from './Style'

function Introduction({scrollRef}) {
	return (
			<Container>
				<IntroductionWrap>
					<TitleTop>INTRODUCTION</TitleTop>
					<Title>Overview.</Title>
					<Desc>
						I'm a skilled software developer with experience in TypeScript and
						JavaScript, and expertise in frameworks like React, Node.js, and
						Three.js. I'm a quick learner and collaborate closely with clients
						to create efficient, scalable, and user-friendly solutions that
						solve real-world problems. Let's work together to bring your ideas
						to life!
					</Desc>

					<Technologies scrollRef={scrollRef} />
				</IntroductionWrap>
			</Container>
	)
}

export default Introduction
