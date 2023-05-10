import { GitHubIcon, LinkedinIcon, TelegramIcon, YouTubeIcon } from '../../assets/icons/icons'
import { SocialList, SocialListItem, SocialListLink } from './Style'

function SocialMedia() {
	return (
		<SocialList>
			<SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<GitHubIcon />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<LinkedinIcon />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<YouTubeIcon />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<TelegramIcon />
				</SocialListLink>
			</SocialListItem>
		</SocialList>
	)
}

export default SocialMedia
