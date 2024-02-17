import {
	Box,
	HStack,
	Heading,
	IconButton,
	Image,
	Stack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import xLogo from '../assets/x.png'
import GithubLogo from '../images/GitHub.tsx'

interface IHeaderLink {
	image: string | React.FC
	name: string
	href: string
}

const headerLinks: IHeaderLink[] = [
	{
		image: xLogo,
		name: 'X',
		href: 'https://x.com/hudsongrae_me',
	},
	{
		image: GithubLogo,
		name: 'Github',
		href: 'https://github.com/hudsongraeme',
	},
]

const Header = () => {
	return (
		<>
			<Box h={16} />
			<Stack
				position='fixed'
				backdropFilter='auto'
				backdropBlur='0.2rem'
				backdropBrightness='20%'
				backdropContrast='80%'
				w='100%'
				h={16}
				justify={'space-between'}
				align='center'
				px={8}
				direction='row'
				zIndex={9999}
			>
				<Heading as={Link} to={'/'} fontSize='xl'>
					HudsonGraeme
				</Heading>
				<HStack justify='center' spacing={8}>
					{headerLinks.map((link, index) => (
						<IconButton
							minW={4}
							h='full'
							aria-label={`Hudson's ${link.name} profile`}
							as={Link}
							to={link.href}
							key={`${link.href}-${index}`}
							variant='unstyled'
							fontSize='md'
							target='_blank'
							fontWeight='normal'
							icon={
								typeof link.image === 'string' ? (
									<Image src={link.image} h={4} />
								) : (
									<link.image />
								)
							}
						/>
					))}
				</HStack>
			</Stack>
		</>
	)
}

export default Header
