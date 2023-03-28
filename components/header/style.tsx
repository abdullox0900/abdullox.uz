import styled from 'styled-components'

export const HeaderWrap = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40px 0;
`
export const HeaderLogo = styled.div`
	display: flex;
    align-items: center;
    font-size: 24px;
	color: #fff;
`

export const HeaderSnap = styled.div`
font-size: 26px;
	font-weight: 700;
`

export const HeaderNav = styled.nav``

export const HeaderNavList = styled.ul`
	display: flex;
	align-items: center;
`
export const HeaderNavItem = styled.li`
	font-weight: 400;
	font-size: 15px;
	line-height: 22px;
	color: rgba(160, 160, 160, 0.5);
	cursor: pointer;

	& + & {
		margin-left: 25px;
	}
`

export const HeaderBtn = styled.button`
	padding: 0;
	border: none;
	background-color: red;
`
