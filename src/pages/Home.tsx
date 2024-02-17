import { VStack } from '@chakra-ui/react'
import Experience from '../sections/Experience'
import Footer from '../sections/Footer'
import Intro from '../sections/Intro'
const HomePage = () => {
	return (
		<VStack spacing={0}>
			<Intro />
			<Experience />
			<Footer />
		</VStack>
	)
}

export default HomePage
