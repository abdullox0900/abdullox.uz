import {
	HeroAvatar,
	HeroContent,
	HeroContentInfo,
	HeroContentTitle,
	HeroTitle,
	HeroWrap,
	HeroWrapTop
} from './style'
import Earth from './earth'
import { useRouter } from 'next/router'
import { Container } from '../container/Container'
import SocialMedia from '../social_media/SocialMedia'
import { useRef } from 'react'

function Hero() {


	return (
		<HeroWrap>
			<Container>
				<HeroWrapTop>
					<HeroAvatar src='https://avatars.githubusercontent.com/u/94014212?s=400&u=24f0acd3a000f49293cb0dd4923bc6175b740ee3&v=4' />
					<HeroTitle>
						Abdullokh <br /> Abdusalomov
					</HeroTitle>
				</HeroWrapTop>
				<HeroContent>
					<HeroContentTitle>I'm a Software Engineer</HeroContentTitle>
					<HeroContentInfo>
						Frontend developer, UX architect and Javascript engineer,
						enthusiast, practicing minimalist, and in search of flow.
					</HeroContentInfo>
					<SocialMedia />
				</HeroContent>
			</Container>
			{/* <div
			   ref={elRefElement}
				className='earth'
				style={styles1}>
				<Earth />
			</div> */}
		</HeroWrap>
	)
}

export default Hero
