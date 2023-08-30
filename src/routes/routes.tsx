import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'

type Props = {
  isAuthenticated: boolean
}

export const AppRoutes = ({ isAuthenticated }: Props) => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
      loader: () => {
        if (isAuthenticated) {
          return redirect('/home')
        }
        return null
      }
    },
    {
      path: '/home',
      element: <Home />,
      loader: () => {
        if (!isAuthenticated) {
          return redirect('/')
        }
        return null
      }
    }
  ])

  return {
    routes
  }
}
