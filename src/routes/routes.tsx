import { createBrowserRouter, redirect } from 'react-router-dom'
import Layout from '../components/layout'
import Home from '../pages/home'
import Login from '../pages/login'
import Posts from '../pages/posts'

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
      element: <Layout />,
      loader: () => {
        if (!isAuthenticated) {
          return redirect('/')
        }
        return null
      },
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: ':postsId',
          element: <Posts />
        }
      ]
    }
  ])

  return {
    routes
  }
}
