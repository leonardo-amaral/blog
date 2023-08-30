import { Box, Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import CreateTopicModal from '../../components/modal/createTopic'
import { useAuth } from '../../context/AuthContext'

function Home() {
  const { logout } = useAuth()

  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Box h="100vh" backgroundColor="white">
      <Flex
        w="100%"
        h="10%"
        backgroundColor="gray.900"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        p="0 200px"
      >
        <Heading color="white">Blogs</Heading>
        <Button colorScheme="messenger" onClick={logout}>
          Log Out
        </Button>
      </Flex>
      <Flex flexDir="column" p="100px 200px" w="100%" h="100%" gap="30px">
        <Flex borderBottom="1px solid black" justifyContent="space-between">
          <Heading>Feed</Heading>
          <Button colorScheme="messenger" onClick={onOpen}>
            Create
          </Button>
        </Flex>
        <Flex flexWrap="wrap" w="100%" h="100%">
          <Box w="25%" backgroundColor="gray.900" h="60%">
            tets
          </Box>
        </Flex>
      </Flex>

      <CreateTopicModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Home
