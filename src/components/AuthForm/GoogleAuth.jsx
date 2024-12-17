import { Flex, Image, Text } from '@chakra-ui/react'
import useShowToast from '../../hooks/useShowToast';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import useAuthStore from '../../store/authStore';

const GoogleAuth = ({ prefix }) => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle()
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return
      }
      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        // login
        const userDoc = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      } else {
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split("@")[0],
          fullname: newUser.user.displayName,
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    }
    catch (error) {
      showToast("Error", error.message, "error");
    }
  }

  return (
    <Flex 
      alignItems={"center"} 
      justifyContent={"center"} 
      cursor={"pointer"}
      onClick={handleGoogleAuth}
      bg="whiteAlpha.200"
      p={2}
      borderRadius={6}
      border="1px solid"
      borderColor="whiteAlpha.300"
      transition="all 0.3s"
      _hover={{
        bg: "whiteAlpha.300",
        transform: "scale(1.02)"
      }}
    >
      <Image 
        src="/google.png" 
        w={5} 
        alt="Google Logo" 
        mr={2}
      />
      <Text 
        color={"white"} 
        fontWeight={"semibold"}
      >
        {prefix} in with Google
      </Text>
    </Flex>
  )
}

export default GoogleAuth