import { 
  VStack, 
  Spinner, 
  Text, 
  Flex 
} from '@chakra-ui/react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'
import { motion } from 'framer-motion'

const MotionVStack = motion(VStack)

const FeedPosts = () => {
  const {isLoading, posts} = useGetFeedPosts();

  if (isLoading) {
    return (
      <Flex 
        justifyContent="center" 
        alignItems="center" 
        h="full"
        w="full"
      >
        <Spinner 
          size="xl" 
          color="gray.400" 
          thickness="4px"
        />
      </Flex>
    )
  }

  if (!posts.length) {
    return (
      <Text 
        color="gray.500" 
        textAlign="center" 
        fontSize="xl"
      >
        No posts to show
      </Text>
    )
  }

  return (
    <MotionVStack 
      spacing={6}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      w="full"
    >
      {posts.map((post) => (
        <FeedPost 
          key={post.id} 
          post={post} 
        />
      ))}
    </MotionVStack>
  )
}

export default FeedPosts