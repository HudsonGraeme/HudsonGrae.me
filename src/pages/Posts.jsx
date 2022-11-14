import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <VStack h="100%" w="100%" spacing={0} rounded="2xl" overflow="hidden">
      <Flex h="75%" w="100%" bg="gray.700">
        <Image src="" />
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
          <Heading>{post.title}</Heading>
          <Text>{post.metadata?.description}</Text>
        </VStack>
        <Button
          rightIcon={<ArrowForwardIcon />}
          as={Link}
          to={post.path}
          color="white"
          bg="purple.500"
        >
          View Post
        </Button>
      </VStack>
    </VStack>
  );
};

const PostsPage = () => (
  <>
    <Heading fontSize="4xl" m={4}>
      Posts
    </Heading>
    <SimpleGrid
      columns={{ base: 1, lg: 2, xl: 4 }}
      w="100%"
      h="100%"
      gap={4}
      p={{ base: 4, lg: 16 }}
    >
      {[].map((post, index) => (
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
