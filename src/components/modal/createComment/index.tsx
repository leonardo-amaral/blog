import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Textarea,
  useToast
} from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CommentsController, commentsKeys } from '../../../controllers/CommentsController'

export default function CreateCommentModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [comment, setComment] = useState<string>()

  const queryClient = useQueryClient()

  const { createComment } = CommentsController()
  const { postsId } = useParams()
  const toast = useToast()

  const handleCreateComment = async () => {
    const data = {
      content: comment,
      postId: postsId
    }

    const request = await createComment(data)
    if (request != null) {
      toast({
        title: 'Comment created with success!.',
        description: 'Your post can now be displayed!',
        status: 'success',
        duration: 9000,
        isClosable: true
      })
      onClose()
      queryClient.invalidateQueries([commentsKeys.lsitComments, postsId])
    }
  }

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="fit-content">
        <ModalBody minH="100px" h="100%">
          <Stack>
            <Heading color="gray.800">Comment</Heading>
            <Textarea
              placeholder="Write your comment here..."
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="messenger" onClick={handleCreateComment}>
            Comment
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
