import { Avatar, AvatarGroup, Flex, VStack,Text, Button } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader=()=> {
  return (
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:"row"}}>
    <AvatarGroup size={{base:"xl",md:"2xl"}} justifySelf={"center"} alignSelf={"flex-start"}>
     <Avatar name='As a Programmer' src='/profilepic.jpg' alt='As a Programmer logo' />
    </AvatarGroup>

    <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
     <Flex gap={4} direction={{base:"column",sm:"row"}}
     justifyContent={{base:"center",sm:"flex-start"}}
     alignItems={"center"}
     w={"full"}>
     <Text fontSize={{base:"sm",md:"lg"}} >shiven24k</Text>

     <Flex>
        <Button bg={"#373736"} color={"white"} _hover={{bg:"whiteAlpha.800"}} size={{base:"xs",md:"sm"}}>
          Edit Profile
        </Button>
     </Flex>
     </Flex>
     <Flex alignItems={"center"} gap={{base:2,sm:4}}> 
      <Text fontSize={{base:"xs",md:"sm"}}>
        <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
         Posts
      </Text>
      <Text fontSize={{base:"xs",md:"sm"}}>
        <Text as="span" fontWeight={"bold"} mr={1}>46M</Text>
         Followers
      </Text>
      <Text fontSize={{base:"xs",md:"sm"}}>
        <Text as="span" fontWeight={"bold"} mr={1}>273</Text>
         Following
      </Text>
     </Flex>
     <Flex alignItems={"center"} gap={4}>
        <Text fontSize={"sm"} fontWeight={"bold"}>Shiven Kashyap</Text>
     </Flex>
        <Text fontSize={"sm"}>
         Well hello there,
       
        </Text>
        <Text fontSize={"sm"}>
        
        |Ｂｏｏｋ Ｊｕｇｇｌｅｒ|
        </Text>
        <Text fontSize={"sm"}>
        |Ｔｅｃｈｎｏｐｈｉｌｅ|
       </Text>
       <Text fontSize={"sm"}>
       |Ｌｉｇｈｔ Ｇａｍｅｒ|
      </Text>
        
        
    </VStack>

    </Flex>

    
  )
}

export default ProfileHeader