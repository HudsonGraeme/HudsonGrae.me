import { HStack, Heading, IconButton, Image, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import xLogo from '../assets/x.png'

const headerLinks = [
	{
		image: xLogo,
		href: 'https://x.com/hudsongrae_me',
	},
]

const Header = () => {
	return (
		<Stack
			position='fixed'
			bg='whiteAlpha.200'
			backdropBlur={{ base: 0, lg: 4 }}
			backdropFilter='auto'
			w='100%'
			h={16}
			justify={'space-between'}
			align='center'
			px={8}
			direction='row'
		>
			<Heading as={Link} to={'/'} fontSize='xl'>
				HudsonGraeme
			</Heading>
			<HStack justify='center' spacing='8'>
				{headerLinks.map((link, index) => (
					<IconButton
						h='full'
						aria-label="Hudson's X.com profile"
						as={Link}
						to={link.href}
						key={`${link.href}-${index}`}
						variant='unstyled'
						fontSize='md'
						fontWeight='normal'
						icon={<Image src={link.image} h={4} w={4} />}
					/>
				))}
			</HStack>
		</Stack>
	)
}

export default Header
