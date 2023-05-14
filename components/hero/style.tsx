import styled from 'styled-components'

export const HeroWrap = styled.div`
	width: 100%;
	padding: 30px 0px;
`

export const HeroWrapTop = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	margin-top: 50px;
`

export const HeroAvatar = styled.img`
	width: 250px;
	height: 250px;
	margin-right: 30px;
	margin-bottom: 30px;
	border-radius: 50%;
	object-fit: cover;
`

export const HeroTitle = styled.h1`
	font-family: 'Preahvihear';
	font-style: normal;
	font-weight: 400;
	font-size: 50px;
	line-height: 60px;
	color: #fff;
`

export const HeroContent = styled.div``

export const HeroContentTitle = styled.h2`
	font-family: 'Preahvihear';
	font-style: normal;
	font-weight: 400;
	font-size: 26px;
	color: #fff;
	line-height: 47px;
	letter-spacing: 0.02em;
	margin-bottom: 20px;
`

export const HeroContentInfo = styled.p`
	width: 380px;
	margin-bottom: 30px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: normal;
	color: #545454;
`

export const HeroContentAnimeBox = styled.div`
	position: absolute;
	left: 20%;
	width: 300px;
	height: 600px;
	background: radial-gradient(
			50% 50% at 50% 50%,
			#000e35 0%,
			rgba(0, 14, 53, 0) 100%
		),
		radial-gradient(50% 50% at 50% 50%, #000e35 0%, rgba(0, 14, 53, 0) 100%);
	transform: rotate(-89.25deg);
	z-index: -1;
`
