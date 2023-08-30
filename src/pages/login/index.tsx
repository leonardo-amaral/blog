import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { useAuth } from '../../context/AuthContext'

const newLoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

type NewLoginFormInputs = z.infer<typeof newLoginFormSchema>

function Login() {
  const { register, handleSubmit, reset } = useForm<NewLoginFormInputs>({
    resolver: zodResolver(newLoginFormSchema)
  })

  const { login } = useAuth()

  async function handleMakeLogin(data: NewLoginFormInputs) {
    const { email, password } = data
    login({ email, password })
    reset()
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      backgroundColor="gray.900"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="30%"
        h="80%"
        backgroundColor="white"
        p="50px"
        borderRadius="5px"
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="5%"
      >
        <Heading>Blogs</Heading>
        <form
          style={{ width: '100%' }}
          onSubmit={handleSubmit(handleMakeLogin)}
        >
          <Stack w="100%">
            <Text fontWeight="bold" color="black">
              Email:{' '}
            </Text>
            <Input
              type="email"
              placeholder="jhondoe@gmail.com"
              border=" 1px solid #007cb6"
              {...register('email')}
            />
          </Stack>
          <Stack w="100%">
            <Text fontWeight="bold" color="black">
              Password:
            </Text>
            <Input
              border=" 1px solid #007cb6"
              type="password"
              placeholder="*******"
              {...register('password')}
            />
          </Stack>
          <Button type="submit" mt="300px" w="100%" colorScheme="messenger">
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  )
}

export default Login
