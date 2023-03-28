import { HeroAvatar, HeroWrap, HeroWrapTop } from './style'
import Earth from './earth'
import { useRouter } from 'next/router'

function Hero() {
	// const router = useRouter()
	//
	// if (router.pathname == '/') {
	// 	document.body.style.overflow = 'hidden'
	// }

	return (
		<HeroWrap>
			{/* <HeroWrapTop>
				<HeroAvatar src='' />
			</HeroWrapTop> */}
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
