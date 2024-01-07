import { VStack } from '@chakra-ui/react'
import TitleAndSubtitle from '../components/TitleAndSubtitle'

const Experience = () => {
	return (
		<VStack
			justify='center'
			align='start'
			w='full'
			h='full'
			spacing='6'
			minH='100vh'
		>
			<TitleAndSubtitle
				title='My Experience'
				subtitle="What I've worked on"
			/>
		</VStack>
	)
}

export default Experience
