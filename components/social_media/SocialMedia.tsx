import { useState } from 'react'
import { GitHubIcon, LinkedinIcon, TelegramIcon, YouTubeIcon } from '../../assets/icons/icons'
import { SocialList, SocialListItem, SocialListLink } from './Style'

function SocialMedia() {

	return (
		<SocialList>
			<SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<GitHubIcon width={'24px'} height={'24px'} color={'#545454'} />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<LinkedinIcon width={'24px'} height={'24px'} color={'#545454'} />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<YouTubeIcon width={'24px'} height={'24px'} color={'#545454'} />
				</SocialListLink>
			</SocialListItem>
            <SocialListItem>
				<SocialListLink href='#' target='_blank'>
					<TelegramIcon width={'24px'} height={'24px'} color={'#545454'} />
				</SocialListLink>
			</SocialListItem>
		</SocialList>
	)
}

export default SocialMedia
