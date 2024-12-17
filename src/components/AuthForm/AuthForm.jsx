import { Box, Flex, Image, VStack, Text } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import GoogleAuth from "./GoogleAuth"

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <VStack spacing={6} w="full">
            <Box 
                border={"1px solid"} 
                borderColor={"whiteAlpha.300"} 
                borderRadius={8} 
                p={6} 
                w="full" 
                boxShadow={"sm"}
                bg="#023485"
            >
                <VStack spacing={5}>
                    <Image 
                        src='/logo.png' 
                       
                        cursor={"pointer"} 
                        alt='Instagram' 
                        objectFit="contain"
                    />

                    {isLogin ? <Login/> : <Signup/>}
                    
                    {/* OR Divider */}
                    <Flex 
                        align={"center"} 
                        justifyContent={"center"} 
                        my={3} 
                        gap={4} 
                        w={"full"}
                    >
                        <Box flex={2} h={"1px"} bg={"whiteAlpha.400"} />
                        <Text 
                            mx={1} 
                            color={"white"} 
                            fontWeight={"bold"}
                        >
                            OR
                        </Text>  
                        <Box flex={2} h={"1px"} bg={"whiteAlpha.400"} />
                    </Flex>
                    
                    <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
                </VStack>
            </Box>

            <Box 
                border={"1px solid"} 
                borderColor={"whiteAlpha.300"} 
                borderRadius={8} 
                p={4} 
                w="full" 
                boxShadow={"sm"}
                bg="#023485"
            >
                <Flex 
                    alignItems={"center"} 
                    justifyContent={"center"}
                >
                    <Text 
                        mx={2} 
                        fontSize={14} 
                        color={"whiteAlpha.700"}
                    >
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Text>
                    <Text 
                        onClick={() => setIsLogin(!isLogin)} 
                        color={"red.400"} 
                        cursor={"pointer"} 
                        fontWeight={"bold"}
                    >
                        {isLogin ? "Sign Up" : "Log in"}
                    </Text>
                </Flex>
            </Box>
        </VStack>
    )
}

export default AuthForm