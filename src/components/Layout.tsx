import { Container, VStack } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => (
	<VStack w='100%' minH='100vh' bg='black'>
		<Header />
		<Container maxW={{ base: '100%', lg: '90%' }}>
			<Outlet />
		</Container>
		<Footer />
	</VStack>
)

export default Layout
