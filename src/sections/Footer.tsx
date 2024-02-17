import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, HStack, Link } from '@chakra-ui/react'

const Footer = () => {
	return (
		<HStack w='full' justify='center' align='center'>
			<HStack>
				<Button
					variant='ghost'
					as={Link}
					rightIcon={<ExternalLinkIcon />}
					href='https://hudsongrae.me'
				>
					View via HTTP
				</Button>
				<Button
					variant='ghost'
					as={Link}
					rightIcon={<ExternalLinkIcon />}
					href='ipfs://QmcgLcWX7GReZFYzXevWaGUpCYNX8U4rZerGWPMsVLfpFP'
				>
					View on IPFS
				</Button>
				<Button
					variant='ghost'
					as={Link}
					rightIcon={<ExternalLinkIcon />}
					href='ipns://k51qzi5uqu5dkivw1ezrzlpf6naa09ohwk269mzoleigr2ia9ftq7ahcrhf85l'
				>
					View via IPNS
				</Button>
				<Button
					variant='ghost'
					as={Link}
					rightIcon={<ExternalLinkIcon />}
					href='https://hudsongraeme.eth'
				>
					View ENS
				</Button>
			</HStack>
		</HStack>
	)
}

export default Footer
