import { useApi } from '../hooks/useApi'

export const postsKeys = {
  listPosts: 'list-posts',
  getPostsById: 'get-posts-by-id'
}

export const PostsController = () => {
  const { api } = useApi()

  const listPosts = async () => {
    const response = await api.get('posts/')
    return response.data
  }

  const getPostsById = async (id: string) => {
    const response = await api.get(`posts/${id}`)

    return response.data
  }

  return {
    listPosts,
    getPostsById
  }
}
