import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Heading, VStack } from '@chakra-ui/react';
import rehypeRaw from 'rehype-raw';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

const PostPage = () => {
  const [post, setPost] = useState();
  const postPath = useLocation();

  const loadFile = useCallback(async () => {
    try {
      const pathComponents = postPath.pathname.split('/');
      const lastPathComponent = pathComponents[pathComponents.length - 1];
      const markdown = await fetch(`/content/${lastPathComponent}`).then(
        (response) => response.text()
      );
      setPost(markdown);
    } catch (e) {
      console.error('Failed to load post', e);
    }
  }, [postPath]);

  useEffect(() => {
    if (postPath) loadFile();
  }, [postPath]);

  return post ? (
    <VStack
      borderRadius={'2xl'}
      bg="gray.900"
      minH="100vh"
      maxW="64rem"
      w="100%"
      align="start"
    >
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={ChakraUIRenderer()}
      >
        {post}
      </ReactMarkdown>
    </VStack>
  ) : (
    <VStack>
      <Heading>Post Not Found</Heading>
    </VStack>
  );
};

export default PostPage;
