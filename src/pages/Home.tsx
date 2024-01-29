import { VStack } from '@chakra-ui/react'
import Experience from '../sections/Experience'
import Intro from '../sections/Intro'
const HomePage = () => {
	return (
		<VStack spacing={0}>
			<Intro />
			<Experience />
		</VStack>
	)
}

export default HomePage
