import { Stack } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Header from './header'

function Layout() {
  return (
    <Stack w="full" h="full" spacing={0}>
      <Header />
      <Outlet />
      <Footer />
    </Stack>
  )
}

export default Layout
