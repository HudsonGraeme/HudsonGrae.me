import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { VStack } from '@chakra-ui/react';

const Layout = () => (
  <VStack w="100%" minH="100vh">
    <Header />
    <Outlet />
    <Footer />
  </VStack>
);

export default Layout;
