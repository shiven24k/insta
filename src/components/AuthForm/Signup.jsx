import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { 
    Alert, 
    AlertIcon, 
    Button, 
    Input, 
    InputGroup, 
    InputRightElement, 
    VStack 
} from "@chakra-ui/react"
import { useState } from "react"
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword"

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
    }) 
    const [showPassword, setShowPassword] = useState(false)
    const { loading, error, signup } = useSignUpWithEmailAndPassword()

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
                placeholder="Username"
                fontSize={14}
                type="text"
                value={inputs.username}
                size={"md"}
                variant="filled"
                bg="whiteAlpha.200"
                color="white"
                borderColor="whiteAlpha.300"
                _hover={{ bg: "whiteAlpha.300" }}
                _placeholder={{ color: "whiteAlpha.600" }}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
            <Input
                placeholder="Full Name"
                fontSize={14}
                type="text"
                value={inputs.fullname}
                size={"md"}
                variant="filled"
                bg="whiteAlpha.200"
                color="white"
                borderColor="whiteAlpha.300"
                _hover={{ bg: "whiteAlpha.300" }}
                _placeholder={{ color: "whiteAlpha.600" }}
                onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
            />
            <InputGroup>
                <Input
                    placeholder="Password"
                    fontSize={14}
                    type={showPassword ? "text" : "password"}
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

                <InputRightElement h="full">
                    <Button 
                        variant={"ghost"} 
                        size={"sm"} 
                        color="white"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>

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
                bg="red.500"
                color="white"
                _hover={{ bg: "red.600" }}
                onClick={() => signup(inputs)}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup