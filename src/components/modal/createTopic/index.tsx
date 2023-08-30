import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useRef } from 'react'

function CreateTopicModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const editorRef = useRef(null)

  return (
    <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create content</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CKEditor
            editor={ClassicEditor}
            data="Write your register here..."
            onReady={editor => {
              console.log('Editor is ready to use!', editor)
            }}
            onChange={(event, editor: any) => {
              const data = editor.getData()
              console.log({ event, editor, data })
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor)
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor)
            }}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="messenger">Publish</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CreateTopicModal
