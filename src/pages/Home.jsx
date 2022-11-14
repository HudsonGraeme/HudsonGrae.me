import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useReducer, useEffect } from 'react';

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
    <VStack justify="center" h="100%">
      <Heading fontSize="8xl" fontWeight="bold">
        Hi.
      </Heading>
      <Text fontSize="6xl">I&apos;m Hudson.</Text>
      <Text fontSize="4xl">
        I develop {adjectives[adjectiveIndex]} frontend experiences
      </Text>
      <Button
        bg="purple.600"
        rounded="full"
        size="lg"
        rightIcon={<ArrowForwardIcon />}
      >
        View Posts
      </Button>
    </VStack>
  );
};

export default HomePage;
