import {
  VStack,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  UnorderedList,
  ListItem,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <HStack
        w="100%"
        align="start"
        px={{ base: 4, xl: 16 }}
        mt={{ base: 4, xl: 8 }}
      >
        <Heading
          fontSize="6xl"
          rounded="xl"
          bg="gray.900"
          textAlign="left"
          p={2}
          px={16}
        >
          About
        </Heading>
      </HStack>
      <VStack w="100%" justify="space-evenly" minH="80vh">
        <VStack
          rounded="2xl"
          overflow="hidden"
          maxW="80rem"
          bg="gray.900"
          py={{ base: 4, xl: 10 }}
          px={{ base: 4, xl: 16 }}
        >
          <Heading fontSize="6xl">About me</Heading>
          <Text>
            GM. I&apos;m a developer. <br />
            <br />I go by HudsonGraeme and have a passion for writing code.
            Without delving into the depths of my boring and arguably unamusing
            origin story, I started to learn to code at the age of twelve.
            Basically I tried to understand assembly for a while then gave up
            after seeing <code>eax</code> for the 5,000th time and still not
            knowing what I was looking at. <br />
            <br />I realized I needed to figure out how to make computer apps,
            so after giving on assembly I tried my hand at swift... It took me
            about a year to get my first successful web request to go through
            (at that time it was to Tesla&apos;s API which wasn&apos;t public
            but had been documented by @timdorr). After figuring out swift I
            moved onto C, C++, C#, Java, some weird forray into XPaths for XML
            searching (would rather encounter a 512 character regex than deal
            with those again), python (of course) then ultimately Javascript.{' '}
            <br />
            <br />
            Over time I realized I really enjoyed building on the frontend side.
            I am currently learning more about 3d rendering on the web as well
            as web3 development and blockchain interaction through dapps.
          </Text>
          <Button variant="primary" as={Link} to="/contact">
            Shoot me a message
          </Button>
        </VStack>
        <Accordion
          w="100%"
          maxW="80rem"
          allowToggle
          bg="gray.900"
          rounded="2xl"
        >
          <AccordionItem border="none">
            <h2>
              <AccordionButton h={16} fontWeight="bold" fontSize="xl">
                <Box flex="1" textAlign="left">
                  What can you do?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4} roundedBottom="xl" bg="gray.700">
              Anything in the realm of:
              <UnorderedList>
                <ListItem>
                  Designing and building out frontend components using ReactJS
                  or regular JS/HTML/CSS
                </ListItem>
                <ListItem>
                  Building out backend APIs or other backend systems (Java, JS,
                  Python, C#)
                </ListItem>
                <ListItem>
                  Interacting with the Ethereum blockchain using a frontend
                </ListItem>
                <ListItem>Annoying code reviews</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <h2>
              <AccordionButton h={16} fontWeight="bold" fontSize="xl">
                <Box flex="1" textAlign="left">
                  What can&apos;t you do?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4} roundedBottom="xl" bg="gray.700">
              Anything involving:
              <UnorderedList>
                <ListItem>
                  <code>PHP</code> - I won&apos;t go near that language. There
                  are too many dollar signs.
                </ListItem>
                <ListItem>
                  <code>JQuery</code> - The devil&apos;s library. I am
                  considering making a chrome extension that hides all
                  StackOverflow answers that include any mention or example of
                  this godforsaken library.
                </ListItem>
                <ListItem>
                  <code>Assembly</code> - PTSD. Need I explain?
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </>
  );
};

export default AboutPage;
