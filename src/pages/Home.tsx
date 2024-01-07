import { VStack } from '@chakra-ui/react'
import Intro from '../sections/Intro'

const HomePage = () => {
	return (
		<VStack spacing={0}>
			<Intro />
			{/* <Experience />
			<Card
				title='My Projects'
				subtitle='Some of the projects I have worked on'
				description='Here are some of the projects I have worked on'
				feature={image}
			/> */}
		</VStack>
	)
}

export default HomePage
