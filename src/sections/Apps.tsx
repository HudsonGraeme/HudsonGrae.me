import { HStack, VStack } from '@chakra-ui/react'
import apps from '../common/apps.json'
import AppCard, { IAppCardProps } from '../components/AppCard'
import TitleAndSubtitle from '../components/TitleAndSubtitle'

const Apps = () => {
	return (
		<VStack
			justify='center'
			align='start'
			w='full'
			h='full'
			spacing='6'
			minH='100vh'
		>
			<TitleAndSubtitle title='Applications' subtitle="What I've built" />
			<HStack
				overflowX='auto'
				maxW='full'
				align='start'
				spacing={6}
				sx={{
					'&::-webkit-scrollbar': { display: 'none' },
					scrollbarWidth: 'none',
				}}
			>
				{(apps as IAppCardProps[]).map((app) => (
					<AppCard key={app.title} {...app} />
				))}
			</HStack>
		</VStack>
	)
}

export default Apps
