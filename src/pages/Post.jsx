import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import rehypeRaw from 'rehype-raw';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { parseMarkdownWithYamlFormatter } from '../common/utils/markdownMetadataParser';
import { ArrowBackIcon } from '@chakra-ui/icons';

const PostPage = () => {
  const [post, setPost] = useState();
  const postPath = useLocation();

  const loadFile = useCallback(async () => {
    try {
      const pathComponents = postPath.pathname.split('/');
      const lastPathComponent = pathComponents[pathComponents.length - 1];
      const file = await fetch(`/content/${lastPathComponent}`).then(
        (response) => response.text()
      );
      setPost(parseMarkdownWithYamlFormatter(file));
    } catch (e) {
      console.error('Failed to load post', e);
    }
  }, [postPath]);

  useEffect(() => {
    if (postPath) loadFile();
  }, [postPath]);

  return post ? (
    <VStack align="start" minH="100vh" maxW="64rem" w="100%" py={8} spacing={8}>
      <Button
        color="white"
        bg="purple.600"
        leftIcon={<ArrowBackIcon />}
        as={Link}
        to="/posts"
      >
        Back to Posts
      </Button>
      <VStack
        borderRadius={'2xl'}
        bg="gray.900"
        h="100%"
        w="100%"
        align="start"
        overflow="hidden"
      >
        <Stack
          bg="gray.700"
          align={{ base: 'start', xl: 'end' }}
          justify={{ base: 'start', xl: 'space-between' }}
          direction={{ base: 'column', xl: 'row-reverse' }}
          w="100%"
          py={4}
          px={{ base: 4, xl: 16 }}
        >
          <VStack align="end" h="100%" justify="space-between">
            <Heading fontSize="lg">{post.metadata?.Tags}</Heading>
            <Heading fontSize="lg">{post.metadata?.Date}</Heading>
          </VStack>
          <Heading fontSize="6xl">
            {post.metadata?.Title}{' '}
            <Text as="span" fontSize="xl">
              by {post.metadata?.Author}
            </Text>
          </Heading>
        </Stack>
        <Box py={4} pb={16} px={{ base: 4, xl: 16 }}>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={ChakraUIRenderer()}
          >
            {post?.markdown}
          </ReactMarkdown>
        </Box>
      </VStack>
    </VStack>
  ) : (
    <VStack>
      <Heading>Post Not Found</Heading>
    </VStack>
  );
};

export default PostPage;
