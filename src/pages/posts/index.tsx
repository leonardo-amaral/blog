import { Flex, Heading, Text } from '@chakra-ui/react'
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
    <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
      <Flex mt="100px" w="50%" h="fit-content" flexDir="column" gap="50px">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading>{title} </Heading>
          <Text fontSize="14px" color="gray.500" fontWeight="medium">
            {' '}
            {createdAt ? new Date(createdAt).toUTCString() : ''}
          </Text>
        </Flex>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </Flex>
    </Flex>
  )
}

export default Posts
