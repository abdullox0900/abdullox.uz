import {Container} from "../container/container"
import {
	HeaderBtn,
	HeaderLogo,
	HeaderNav,
	HeaderNavItem,
	HeaderNavList,
	HeaderSnap,
	HeaderWrap
} from './style'

import ModeIcon from "../../assets/svg/mode-icon";

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

				 <HeaderBtn onClick={() => {
					 document.body.style.backgroundColor = '#020a13'
					 document.body.style.color = '#fff'
				 }}>
					 <ModeIcon />
				 </HeaderBtn>
			</HeaderWrap>
		</Container>
	)
}

export default Header
