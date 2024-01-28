import { useState } from 'react'
import { GitHubIcon, LinkedinIcon, TelegramIcon, YouTubeIcon } from '../../assets/icons/icons'
import { SocialList, SocialListItem, SocialListLink } from './Style'

function SocialMedia() {

	return (
		<SocialList>
			<SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<GitHubIcon width={'28px'} height={'28px'} color={'#fff'} />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<LinkedinIcon width={'28px'} height={'28px'} color={'#fff'} />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<YouTubeIcon width={'28px'} height={'28px'} color={'#fff'} />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<TelegramIcon width={'28px'} height={'28px'} color={'#fff'} />
				</SocialListLink>
			</SocialListItem>
		</SocialList>
	)
}

export default SocialMedia
