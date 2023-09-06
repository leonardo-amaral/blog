import { Flex, Heading, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
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
      <Flex gap="100px" alignItems="center">
        <Link to="/" color="white">
          <Text color="white" fontWeight="medium">
            Home
          </Text>
        </Link>
        <Link to="/" color="white">
          <Text color="white" fontWeight="medium">
            Categories
          </Text>
        </Link>
        <Link to="/" color="white">
          <Text color="white" fontWeight="medium">
            Info
          </Text>
        </Link>
        <Link to="/" color="white" onClick={logout}>
          <Text color="white" fontWeight="medium">
            Log Out
          </Text>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Header
