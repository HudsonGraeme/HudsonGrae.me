import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Action = {
  ADD: 'ADD',
};

const adjectives = ['immersive', 'performative', 'unique'];

const adjectiveReducer = (state, action) => {
  switch (action) {
    case Action.ADD:
      return state + 1 >= adjectives.length ? 0 : state + 1;
    default:
      console.warn(`${action} isn't implemented in the adjective reducer.`);
      return state;
  }
};

const HomePage = () => {
  const [adjectiveIndex, dispatchAdjectiveChange] = useReducer(
    adjectiveReducer,
    0
  );
  useEffect(() => {
    const interval = setInterval(() => {
      dispatchAdjectiveChange(Action.ADD);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <VStack justify="center" h="100%" minH="80vh">
      <Heading fontSize="8xl" fontWeight="bold">
        Hi.
      </Heading>
      <Text fontSize="6xl">I&apos;m Hudson.</Text>
      <Text fontSize="4xl">
        I develop {adjectives[adjectiveIndex]} frontend experiences
      </Text>
      <Stack direction={{ base: 'column', lg: 'row' }}>
        <Button
          variant="primary"
          rounded="full"
          size="lg"
          as={Link}
          to="/posts"
          rightIcon={<ArrowForwardIcon />}
        >
          View Posts
        </Button>
        <Button variant="secondary" size="lg" as={Link} to="/contact">
          Get in Touch
        </Button>
      </Stack>
    </VStack>
  );
};

export default HomePage;
