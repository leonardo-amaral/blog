import {
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  useToast
} from '@chakra-ui/react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useRef, useState } from 'react'
import { PostsController } from '../../../controllers/PostsControllers'

function CreateTopicModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [postContent, setPostContent] = useState<string>()
  const editorRef = useRef(null)

  const toast = useToast()

  const { createPost } = PostsController()

  const handleSubmitPost = async () => {
    const request = await createPost(postContent)
    if (request != null) {
      toast({
        title: 'Post created with success!.',
        description: 'Your post can now be displayed!',
        status: 'success',
        duration: 9000,
        isClosable: true
      })
      onClose()
    }
  }

  return (
    <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="500px">
        <ModalBody>
          <Tabs isFitted variant="enclosed">
            <TabList w="100%">
              <Tab w="35%">Configure your post</Tab>
              <Tab w="35%">Write your content</Tab>
              <Tab w="35%">Preview</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex
                  w="100%"
                  h="100"
                  flexDir="column"
                  alignItems="center"
                  gap="20px"
                >
                  <Stack w="100%">
                    <Flex
                      flexDir="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text fontWeight="bold" color="black">
                        Title:
                      </Text>
                      <Text fontWeight="normal" color="gray.400">
                        0/35
                      </Text>
                    </Flex>
                    <Input
                      type="Title"
                      placeholder="How Jhon Doe born."
                      border=" 1px solid #007cb6"
                    />
                  </Stack>
                  <Stack w="100%">
                    <Flex
                      flexDir="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text fontWeight="bold" color="black">
                        Description:
                      </Text>
                      <Text fontWeight="normal" color="gray.400">
                        0/300
                      </Text>
                    </Flex>
                    <Textarea
                      placeholder="Here is a sample placeholder"
                      border=" 1px solid #007cb6"
                    />
                  </Stack>
                </Flex>
              </TabPanel>
              <TabPanel>
                <CKEditor
                  editor={ClassicEditor}
                  data="Write your register here..."
                  onReady={editor => {
                    console.log('Editor is ready to use!', editor)
                  }}
                  onChange={(event, editor: any) => {
                    const data = editor.getData()
                    setPostContent(data)
                  }}
                />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        {/* <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="messenger" onClick={handleSubmitPost}>
            Publish
          </Button> */}
      </ModalContent>
    </Modal>
  )
}

export default CreateTopicModal
