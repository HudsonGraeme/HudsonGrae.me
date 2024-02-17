import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, HStack, Link } from '@chakra-ui/react'

interface IFooterLink {
	name: string
	disabled?: boolean
	href: string
}

let links: IFooterLink[] = [
	{
		name: 'HTTP',
		href: 'https://hudsongrae.me',
	},
	{
		name: 'IPFS',
		href: 'ipns://k51qzi5uqu5dkivw1ezrzlpf6naa09ohwk269mzoleigr2ia9ftq7ahcrhf85l',
	},
	{
		name: 'ENS',
		href: 'https://hudsongraeme.eth',
	},
]

links = links.map((link) => {
	link.disabled = window.location.href.includes(link.href.split('://')[1])
	return link
})

const Footer = () => {
	return (
		<HStack overflow='hidden' maxW='100vw'>
			{links.map(({ name, href, disabled }: IFooterLink) => (
				<Button
					px={2}
					target='_blank'
					variant='ghost'
					as={Link}
					rightIcon={<ExternalLinkIcon />}
					isDisabled={disabled}
					href={href}
					onClick={disabled ? (e) => e.preventDefault() : undefined}
					key={name}
				>
					{name}
				</Button>
			))}
		</HStack>
	)
}

export default Footer
