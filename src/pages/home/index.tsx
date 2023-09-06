import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Skeleton,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { MdCreate } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import CreateTopicModal from '../../components/modal/createTopic'
import { PostsController, postsKeys } from '../../controllers/PostsControllers'

function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const { listPosts } = PostsController()

  const { data, isLoading } = useQuery(
    [postsKeys.listPosts],
    async () => await listPosts()
  )

  const navigate = useNavigate()

  return (
    <>
      <Flex flexDir="column" p="50px 200px" w="100%" h="100%" gap="30px">
        <Flex borderBottom="1px solid black" justifyContent="space-between">
          <Heading>Feed</Heading>
          <Button colorScheme="messenger" onClick={onOpen}>
            <MdCreate />
          </Button>
        </Flex>
        <Flex minH="500px" flexWrap="wrap" w="100%" h="100%" gap="10px">
          {isLoading ? (
            <Skeleton height="60%" />
          ) : (
            data?.posts.map((item, index) => (
              <Card
                w="365px"
                h="450px"
                backgroundColor="gray.900"
                onClick={() => navigate(`/home/${item.id}`)}
                cursor="pointer"
              >
                <CardHeader>
                  <Image
                    borderRadius="5"
                    objectFit="cover"
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                  />
                </CardHeader>
                <CardBody>
                  <Flex w="100%" h="100%" flexDir="column" gap="2px">
                    <Flex alignItems="center" justifyContent="space-between">
                      <Text
                        h="40px"
                        w="100%"
                        overflow="hidden"
                        fontSize="24px"
                        color="white"
                      >
                        {item.title}
                      </Text>
                    </Flex>
                    <Text
                      h="100px"
                      fontSize="13px"
                      color="gray.300"
                      overflow="hidden"
                    >
                      {item.description}
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                      {new Date(item.createdAt || '').toUTCString()}
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            ))
          )}
        </Flex>
      </Flex>

      <CreateTopicModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Home
