import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, HStack, Link } from '@chakra-ui/react'

interface IFooterLink {
	name: string
	href: string
}

const Links: IFooterLink[] = [
	{
		name: 'HTTP',
		href: 'https://hudsongrae.me',
	},
	{
		name: 'IPFS',
		href: 'ipfs://QmcgLcWX7GReZFYzXevWaGUpCYNX8U4rZerGWPMsVLfpFP',
	},
	{
		name: 'IPNS',
		href: 'ipns://k51qzi5uqu5dkivw1ezrzlpf6naa09ohwk269mzoleigr2ia9ftq7ahcrhf85l',
	},
	{
		name: 'ENS',
		href: 'https://hudsongraeme.eth',
	},
]

const Footer = () => {
	return (
		<HStack overflow='hidden' maxW='100vw'>
			{Links.map(({ name, href }: IFooterLink) => (
				<Button
					px={2}
					target='_blank'
					variant='ghost'
					as={Link}
					rightIcon={<ExternalLinkIcon />}
					href={href}
					key={name}
				>
					{name}
				</Button>
			))}
		</HStack>
	)
}

export default Footer
