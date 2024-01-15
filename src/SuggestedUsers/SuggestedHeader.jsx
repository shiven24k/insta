import { Avatar, Flex ,Text,Link, VStack} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const SuggestedHeader = () => {
  return ( 
  <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
   <Flex alignItems={"center"} gap={2}>
    <Avatar name='As a programmer' size={"md"} src="/profilepic.jpg"/>
      <VStack alignItems={"flex-start"} gap={-1}>
            
      <Text fontSize={14} fontWeight={"bold"} >
       shiven24k
      </Text>
      <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
       Shiven
      </Text>      
      </VStack>

   </Flex>
   
   
   <Link 
       as={RouterLink}
       to={"/auth"}
       fontSize={14}
       fontWeight={"medium"}
       color={"blue.400"}
       cursor={"pointer"}
        >Switch
         
   </Link>
   
  </Flex>
  )
}

export default SuggestedHeader