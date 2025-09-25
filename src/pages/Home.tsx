import { VStack } from '@chakra-ui/react'
import Apps from '../sections/Apps'
import Experience from '../sections/Experience'
import Footer from '../sections/Footer'
import Intro from '../sections/Intro'
const HomePage = () => {
	return (
		<VStack spacing={0}>
			<Intro />
			<Experience />
			<Apps />
			<Footer />
		</VStack>
	)
}

export default HomePage
