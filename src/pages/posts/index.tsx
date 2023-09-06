import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
  Wrap
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { PostsController, postsKeys } from '../../controllers/PostsControllers'

function Posts() {
  const { getPostsById } = PostsController()
  const { postsId } = useParams()

  const { data, isLoading, error } = useQuery(
    [postsKeys.getPostsById, postsId],
    async () => await getPostsById(postsId as string)
  )

  // Verifique se data e data.posts existem antes de usá-los
  const title = data?.posts?.title || ''
  const createdAt = data?.posts?.createdAt || ''
  const htmlContent = data?.htmlContent || ''

  return (
    <Flex w="100%" h="100%" flexDir="row" p="0 50px" gap="50px">
      <Flex w="50%" h="100%" flexDir="column" overflow="hidden">
        <Flex
          minH="600px"
          backgroundColor="white"
          padding="100px"
          p="50px 100px"
          w="100%"
          h="fit-content"
          flexDir="column"
          mt="50px"
          mb="50px"
          gap="10px"
        >
          <Flex
            h="100%"
            alignItems="center"
            justifyContent="space-between"
            flexDir="column"
            gap="10px"
          >
            <Heading fontSize="54px">{title} </Heading>
            <Text fontSize="14px" color="gray.500" fontWeight="medium">
              {' '}
              {createdAt ? new Date(createdAt).toUTCString() : ''}
            </Text>
          </Flex>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </Flex>
      </Flex>
      <Flex w="50%" h="100%" flexDir="column">
        <Flex
          mt="50px"
          mb="50px"
          backgroundColor="white"
          w="100%"
          h="100%"
          minH="200px"
          p="50px 100px"
          flexDir="column"
          gap="50px"
        >
          <Heading w="100%" borderBottom="1px solid black">
            Comments
          </Heading>

          <Flex w="100%" h="100%" flexDir="column" gap="5px">
            <Flex
              w="100%"
              minH="80px"
              h="fit-content"
              backgroundColor="gray.700"
              flexDir="column"
              borderRadius="5"
              gap="10px"
              p="15px"
            >
              <Flex flexDir="row" alignItems="center" gap="10px">
                <Avatar name="Jhon Doe" />
                <Flex
                  w="100%"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Jhon Doe</Text>
                  <Text fontSize="12px" color="gray.500">
                    Tue, 05 Sep 2023 21:32:08 GMT
                  </Text>
                </Flex>
              </Flex>

              <Text color="white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                laborum necessitatibus nulla illo soluta alias! Quam, facilis
                aspernatur totam quasi, pariatur minus culpa commodi impedit
                beatae, provident vero dolores ipsum.
              </Text>
            </Flex>
            <Flex
              w="100%"
              minH="80px"
              h="fit-content"
              backgroundColor="gray.700"
              flexDir="column"
              borderRadius="5"
              gap="10px"
              p="15px"
            >
              <Flex flexDir="row" alignItems="center" gap="10px">
                <Avatar name="Jhon Doe" />
                <Flex
                  w="100%"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Jhon Doe</Text>
                  <Text fontSize="12px" color="gray.500">
                    Tue, 05 Sep 2023 21:32:08 GMT
                  </Text>
                </Flex>
              </Flex>

              <Text color="white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                laborum necessitatibus nulla illo soluta alias! Quam, facilis
                aspernatur totam quasi, pariatur minus culpa commodi impedit
                beatae, provident vero dolores ipsum.
              </Text>
            </Flex>
            <Flex
              w="100%"
              minH="80px"
              h="fit-content"
              backgroundColor="gray.700"
              flexDir="column"
              borderRadius="5"
              gap="10px"
              p="15px"
            >
              <Flex flexDir="row" alignItems="center" gap="10px">
                <Avatar name="Jhon Doe" />
                <Flex
                  w="100%"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Jhon Doe</Text>
                  <Text fontSize="12px" color="gray.500">
                    Tue, 05 Sep 2023 21:32:08 GMT
                  </Text>
                </Flex>
              </Flex>

              <Text color="white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                laborum necessitatibus nulla illo soluta alias! Quam, facilis
                aspernatur totam quasi, pariatur minus culpa commodi impedit
                beatae, provident vero dolores ipsum.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          mt="10px"
          mb="50px"
          backgroundColor="white"
          w="100%"
          h="100%"
          minH="200px"
          p="50px 100px"
          flexDir="column"
          gap="50px"
        >
          <Heading w="100%" borderBottom="1px solid black">
            Interesting Posts
          </Heading>

          <Wrap w="100%" flexWrap="wrap" gap="10px">
            <Card
              w="325px"
              h="350px"
              backgroundColor="gray.800"
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
                    <Text fontSize="24px" color="white">
                      Mocked Title
                    </Text>
                  </Flex>

                  <Text fontSize="12px" color="gray.500">
                    Tue, 05 Sep 2023 21:32:08 GMT
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card
              w="325px"
              h="350px"
              backgroundColor="gray.800"
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
                    <Text fontSize="24px" color="white">
                      Mocked Title
                    </Text>
                  </Flex>

                  <Text fontSize="12px" color="gray.500">
                    Tue, 05 Sep 2023 21:32:08 GMT
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card
              w="325px"
              h="350px"
              backgroundColor="gray.800"
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
                    <Text fontSize="24px" color="white">
                      Mocked Title
                    </Text>
                  </Flex>

                  <Text fontSize="12px" color="gray.500">
                    Tue, 05 Sep 2023 21:32:08 GMT
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card
              w="325px"
              h="350px"
              backgroundColor="gray.800"
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
                    <Text fontSize="24px" color="white">
                      Mocked Title
                    </Text>
                  </Flex>

                  <Text fontSize="12px" color="gray.500">
                    Tue, 05 Sep 2023 21:32:08 GMT
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </Wrap>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Posts
