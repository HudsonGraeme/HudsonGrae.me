import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import posts from '../common/manifest.json';

const PostItem = ({ post }) => {
  return (
    <VStack
      h="100%"
      w="100%"
      spacing={0}
      rounded="2xl"
      overflow="hidden"
      shadow="xl"
    >
      <Flex h="75%" w="100%" bg="gray.700">
        <Image src={`/images/${post.Image}`} h="100%" w="100%" />
      </Flex>
      <VStack
        bg="gray.900"
        w="100%"
        h="50%"
        align="end"
        p={4}
        justify="space-between"
      >
        <VStack w="100%" align="start">
          <Heading>{post.Title}</Heading>
          <Text>{post.Description}</Text>
        </VStack>
        <Button
          variant="primary"
          rightIcon={<ArrowForwardIcon />}
          as={Link}
          to={post.filename}
        >
          View Post
        </Button>
      </VStack>
    </VStack>
  );
};

const PostsPage = () => (
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
        Posts
      </Heading>
    </HStack>
    <SimpleGrid
      columns={{ base: 1, lg: 2, '2xl': 3 }}
      w="100%"
      h="100%"
      gap={4}
      p={{ base: 4, lg: 16 }}
    >
      {posts.map((post, index) => (
        <GridItem
          key={`${post.title}-${index}`}
          rounded="2xl"
          bg="gray.800"
          w="100%"
          h="100%"
          minH={96}
        >
          <PostItem post={post} />
        </GridItem>
      ))}
    </SimpleGrid>
  </>
);

export default PostsPage;
