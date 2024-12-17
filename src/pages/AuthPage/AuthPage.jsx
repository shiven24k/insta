import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <Flex 
      minH={"100vh"} 
      justifyContent={"center"} 
      alignItems={"center"} 
      px={4} 
      bg="#012255"
    >
      <Container 
        maxW={"container.md"} 
        padding={0} 
        boxShadow={"xl"} 
        borderRadius={12} 
        overflow={"hidden"}
        bg="#023485"
      >
        <Flex 
          justifyContent={"center"} 
          alignItems={"center"} 
          gap={10} 
          p={8}
        >
          {/* Left hand side */}
          <Box display={{base:"none", md:"block"}} flex={1}>
            <Image 
              src='/Cloud.png' 
              alt="Cloud img" 
              objectFit="contain" 
              maxH={"400px"}
            />
          </Box>
          
          {/* Right hand side */}
          <VStack 
            spacing={6} 
            align={"stretch"} 
            flex={1} 
            w="full"
          >
            <AuthForm/>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  )
}
export default AuthPage