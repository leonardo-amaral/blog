import {
  Button,
  Checkbox,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
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
import JoditEditor from 'jodit-react'
import { useRef, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { PostsController } from '../../../controllers/PostsControllers'

function CreateTopicModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [selectedCategories, setSelectedCatergories] = useState<string[]>([])

  const editorRef = useRef(null)

  const toast = useToast()

  const { createPost } = PostsController()

  const handleSubmitPost = async () => {
    const data = {
      title,
      description,
      data: content,
      categorie: categoriesList
    }

    const request = await createPost(data)
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

  const onChangeCheckbox = async (id: string) => {
    setSelectedCatergories((oldState: string[]) => {
      const copy = [...oldState]

      const index = copy.indexOf(id)

      if (index === -1) {
        copy.push(id)
      } else {
        copy.splice(index, 1)
      }
      return copy
    })
  }

  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = {
    placeholder: 'Start typings...',
    readonly: false
  }

  const categoriesList = [
    'movies',
    'science',
    'nature',
    'foods',
    'universe',
    'cars',
    'technology',
    'history',
    'war',
    'culture'
  ]

  console.log(selectedCategories)

  return (
    <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="fit-content">
        <ModalBody minH="400px" h="100%">
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
                        {`${title?.length}/30`}
                      </Text>
                    </Flex>
                    <Input
                      type="Title"
                      placeholder="How Jhon Doe born."
                      border=" 1px solid #007cb6"
                      value={title}
                      onChange={e => {
                        if (e.target.value.length <= 30) {
                          setTitle(e.target.value)
                        }
                      }}
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
                        {`${description?.length}/300`}
                      </Text>
                    </Flex>
                    <Textarea
                      h="fit-content"
                      value={description}
                      placeholder="Here is a sample placeholder"
                      border=" 1px solid #007cb6"
                      onChange={e => {
                        if (e.target.value.length <= 300) {
                          setDescription(e.target.value)
                        }
                      }}
                    />
                  </Stack>
                  <Stack w="100%">
                    <Flex
                      flexDir="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text fontWeight="bold" color="black">
                        Categories:
                      </Text>
                    </Flex>
                    <Menu closeOnSelect={false}>
                      <MenuButton
                        as={Button}
                        rightIcon={<MdKeyboardArrowDown />}
                      >
                        Select categories
                      </MenuButton>
                      <MenuList w="100%">
                        {categoriesList.map((item, index) => (
                          <MenuItem
                            key={index}
                            w="760px"
                            onClick={() => onChangeCheckbox(item)}
                          >
                            <Flex w="100%" gap="1%">
                              <Checkbox
                                isChecked={selectedCategories?.some(
                                  _i => _i === item
                                )}
                                colorScheme="blue"
                                onChange={event => {
                                  event.preventDefault()
                                  event.stopPropagation()
                                  onChangeCheckbox(item)
                                }}
                              />
                              <Text fontWeight="bold">
                                {item.toUpperCase()}
                              </Text>
                            </Flex>
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  </Stack>
                </Flex>
              </TabPanel>
              <TabPanel>
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={newContent => {
                    console.log(newContent)
                  }}
                />
                {/* <CKEditor
                  editor={ClassicEditor}
                  data="Write your register here..."
                  onReady={editor => {
                    console.log('Editor is ready to use!', editor)
                  }}
                  onChange={(event, editor: any) => {
                    const data = editor.getData()
                    setPostContent(data)
                  }}
                /> */}
              </TabPanel>
              <TabPanel>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            isDisabled={!title || !description || !content ? true : false}
            colorScheme="messenger"
            onClick={handleSubmitPost}
          >
            Publish
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CreateTopicModal
