import { Button, Heading, HStack, Show, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const headerLinks = [
  {
    name: 'Posts',
    href: '/posts',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Header = () => {
  return (
    <Stack
      roundedBottom="2xl"
      bg="gray.900"
      w="100%"
      h={16}
      justify={{ base: 'center', lg: 'space-between' }}
      align={{ base: 'start', lg: 'center' }}
      px={{ base: 4, xl: 8 }}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Heading as={Link} to={'/'}>
        HudsonGraeme
      </Heading>
      <Show above="lg">
        <HStack justify="end">
          {headerLinks.map((link, index) => (
            <Button
              as={Link}
              to={link.href}
              key={`${link.name}-${link.href}-${index}`}
            >
              {link.name}
            </Button>
          ))}
        </HStack>
      </Show>
    </Stack>
  );
};

export default Header;
