import { Container } from '../container/Container'
import {
	HeaderBtn,
	HeaderLogo,
	HeaderNav,
	HeaderNavItem,
	HeaderNavList,
	HeaderSnap,
	HeaderWrap
} from './style'

import Switch from 'react-switch'
import Earth from '../hero/earth'

function Header() {
	// constructor() {
	//     super();
	//     this.state = { checked: false };
	//     this.handleChange = this.handleChange.bind(this);
	// }

	// handleChange(checked) {
	//     this.setState({ checked });
	// }

	return (
		<Container>
			<HeaderWrap>
				<HeaderLogo>
					<HeaderSnap>One</HeaderSnap>Coder
				</HeaderLogo>

				<HeaderNav>
					<HeaderNavList>
						<HeaderNavItem>About</HeaderNavItem>
						<HeaderNavItem>Projects</HeaderNavItem>
						<HeaderNavItem>Resume</HeaderNavItem>
						<HeaderNavItem>Contact</HeaderNavItem>
					</HeaderNavList>
				</HeaderNav>

				{/* <HeaderBtn>as</HeaderBtn> */}
				{/* <Switch onChange={this.handleChange} checked={this.state.checked} /> */}
			</HeaderWrap>
		</Container>
	)
}

export default Header
