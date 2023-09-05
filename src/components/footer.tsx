import { Flex, Heading } from '@chakra-ui/react'

function Footer() {
  return (
    <Flex
      w="100%"
      h="200px"
      backgroundColor="gray.900"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      p="0 200px"
      position="relative"
      bottom="0"
    >
      <Heading color="white">BLOGS</Heading>
      <Heading color="white" fontWeight="thin" fontSize="14px">
        Todos direitos reservados.
      </Heading>
    </Flex>
  )
}

export default Footer
