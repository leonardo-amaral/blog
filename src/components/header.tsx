import { Button, Flex, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Header() {
  const { logout } = useAuth()

  const navigate = useNavigate()

  return (
    <Flex
      w="100%"
      h="100px"
      backgroundColor="gray.900"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      p="0 200px"
      position="sticky"
      top="0"
      left="0"
      zIndex={100}
    >
      <Heading color="white" cursor="pointer" onClick={() => navigate('/home')}>
        Blogs
      </Heading>
      <Button colorScheme="messenger" onClick={logout}>
        Log Out
      </Button>
    </Flex>
  )
}

export default Header
