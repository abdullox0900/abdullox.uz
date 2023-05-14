import { useState } from 'react'
import { GitHubIcon, LinkedinIcon, TelegramIcon, YouTubeIcon } from '../../assets/icons/icons'
import { SocialList, SocialListItem, SocialListLink } from './Style'

function SocialMedia() {

    const [hovered, setHovered] = useState(false)

	const handleMouseEnter = () => {
		setHovered(true);
	  };

	  const handleMouseLeave = () => {
		setHovered(false);
	  };

	return (
		<SocialList>
			<SocialListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<SocialListLink href='#' target='_blank'>
					<GitHubIcon width={'24px'} height={'24px'} color={hovered == true ? '#fff' :'#545454'} />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<SocialListLink href='#' target='_blank'>
					<LinkedinIcon width={'24px'} height={'24px'} color={hovered == true ? '#fff' :'#545454'} />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<SocialListLink href='#' target='_blank'>
					<YouTubeIcon width={'24px'} height={'24px'} color={hovered == true ? '#fff' :'#545454'} />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<SocialListLink href='#' target='_blank'>
					<TelegramIcon width={'24px'} height={'24px'} color={hovered == true ? '#fff' :'#545454'} />
				</SocialListLink>
			</SocialListItem>
		</SocialList>
	)
}

export default SocialMedia
