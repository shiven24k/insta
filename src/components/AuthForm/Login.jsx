import { Alert, AlertIcon, Button, Input, VStack } from "@chakra-ui/react"
import { useState } from "react"
import useLogin from "../../hooks/useLogin"

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const { loading, error, login } = useLogin()

    return (
        <VStack spacing={4} w="full">
            <Input
                placeholder="Email"
                fontSize={14}
                type="email"
                value={inputs.email}
                size={"md"}
                variant="filled"
                bg="whiteAlpha.200"
                color="white"
                borderColor="whiteAlpha.300"
                _hover={{ bg: "whiteAlpha.300" }}
                _placeholder={{ color: "whiteAlpha.600" }}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <Input
                placeholder="Password"
                fontSize={14}
                type="password"
                value={inputs.password}
                size={"md"}
                variant="filled"
                bg="whiteAlpha.200"
                color="white"
                borderColor="whiteAlpha.300"
                _hover={{ bg: "whiteAlpha.300" }}
                _placeholder={{ color: "whiteAlpha.600" }}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            {error && (
                <Alert 
                    status="error" 
                    fontSize={13} 
                    p={2} 
                    borderRadius={4}
                    bg="red.700"
                    color="white"
                >
                    <AlertIcon fontSize={12} color="white"/>
                    {error.message}
                </Alert>
            )}
            <Button 
                w={"full"} 
                size={"md"} 
                fontSize={14} 
                isLoading={loading} 
                onClick={() => login(inputs)}
                bg="red.500"
                color="white"
                _hover={{ bg: "red.600" }}
            >
                Log in 
            </Button>
        </VStack>
    )
}

export default Login