import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import ProfileTabs from '../../components/Profile/ProfileTabs';
import ProfilePosts from '../../components/Profile/ProfilePosts';
import useGetUserProfileByUserName from '../../hooks/useGetUserProfileByUserName';
import { useParams } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

// Custom theme
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: '#272F3E',
        color: '#E0E0E0'
      }
    }
  },
  colors: {
    brand: {
      50: '#E6E6E6',
      100: '#CCCCCC',
      200: '#B3B3B3',
      300: '#999999',
      400: '#808080',
      500: '#272F3E', // primary color
      600: '#1E252F',
      700: '#151A23',
      800: '#0C1016',
      900: '#030509'
    }
  },
  components: {
    Container: {
      baseStyle: {
        bg: '#272F3E',
      }
    },
    Flex: {
      baseStyle: {
        bg: '#272F3E',
      }
    },
    Skeleton: {
      baseStyle: {
        startColor: '#3A4454',
        endColor: '#4A5568'
      }
    }
  }
});

const ProfilePage = () => {
  const { username } = useParams()
  const { isLoading, userProfile } = useGetUserProfileByUserName(username)
  
  const userNotFound = !isLoading && !userProfile
  if (userNotFound) return <UserNotFound />

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg" py={5} bg="#272F3E">
        <Flex 
          py={10} 
          px={4} 
          pl={{base:4,md:10}} 
          w={"full"} 
          mx={"auto"} 
          flexDirection={"column"} 
          bg="#272F3E"
        >
          {!isLoading && userProfile && <ProfileHeader />}
          {isLoading && <ProfileHeaderSkeleton />}
        </Flex>
        <Flex
          px={{base:2,sm:4}}
          maxW={"full"}
          mx={"auto"}
          borderTop={"1px solid"}
          borderColor={"whiteAlpha.300"}
          direction={"column"}
          bg="#272F3E"
        >
          <ProfileTabs />
          <ProfilePosts />
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default ProfilePage

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      bg="#272F3E"
    >
      <SkeletonCircle 
        size='24' 
        startColor="#3A4454" 
        endColor="#4A5568" 
      />

      <VStack 
        alignItems={{ base: "center", sm: "flex-start" }} 
        gap={2} 
        mx={"auto"} 
        flex={1}
      >
        <Skeleton 
          height='12px' 
          width='150px' 
          startColor="#3A4454" 
          endColor="#4A5568" 
        />
        <Skeleton 
          height='12px' 
          width='100px' 
          startColor="#3A4454" 
          endColor="#4A5568" 
        />
      </VStack>
    </Flex>
  );
};

const UserNotFound = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex 
        flexDir='column' 
        textAlign={"center"} 
        mx={"auto"} 
        bg="#272F3E" 
        minH="100vh" 
        justifyContent="center" 
        alignItems="center"
      >
        <Text 
          fontSize={"2xl"} 
          color="#E0E0E0" 
          mb={4}
        >
          User Not Found
        </Text>
        <Link 
          as={RouterLink} 
          to={"/"} 
          color={"blue.300"} 
          w={"max-content"} 
          mx={"auto"}
          _hover={{
            color: "blue.200",
            textDecoration: "underline"
          }}
        > 
          Go Home
        </Link>
      </Flex>
    </ChakraProvider>
  )
}