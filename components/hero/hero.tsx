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
import { Container } from '../container/container'
import SocialMedia from '../social_media/SocialMedia'

function Hero() {
	// const router = useRouter()
	//
	// if (router.pathname == '/') {
	// 	document.body.style.overflow = 'hidden'
	// }

	return (
		<HeroWrap>
			<Container>
				<HeroWrapTop>
					<HeroAvatar src='https://media.licdn.com/dms/image/D4D35AQHcTHLJfPb8fw/profile-framedphoto-shrink_400_400/0/1683638141195?e=1684328400&v=beta&t=LPevDoQKsq07O7c6C5p89a6BAMivzyYrr4VEZOZNBpk' />
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
			<div
				className='earth'
				style={{
					position: 'absolute',
					right: '-400px',
					bottom: '-250px',
					width: '900px',
					height: '900px'
				}}
			>
				<Earth />
			</div>
		</HeroWrap>
	)
}

export default Hero
