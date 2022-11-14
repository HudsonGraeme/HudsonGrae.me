import { Heading, Stack } from '@chakra-ui/react';

const Header = () => {
  return (
    <Stack
      roundedBottom="2xl"
      bg="gray.900"
      w="100%"
      h={16}
      justify="center"
      px={{ base: 4, xl: 8 }}
    >
      <Heading>HudsonGraeme</Heading>
    </Stack>
  );
};

export default Header;
