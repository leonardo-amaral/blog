import { ListPostsType, PostsContentType } from '../@types/posts'
import { useApi } from '../hooks/useApi'

export const postsKeys = {
  listPosts: 'list-posts',
  getPostsById: 'get-posts-by-id'
}

export const PostsController = () => {
  const { api } = useApi()

  const listPosts = async () => {
    const response = await api.get<ListPostsType>('posts/')
    return response.data
  }

  const getPostsById = async (id: string) => {
    const response = await api.get<PostsContentType>(`posts/${id}`)

    return response.data
  }

  const createPost = async (data: string | undefined) => {
    const response = await api.post(`posts/`, {
      title: 'mocked-title',
      data
    })

    return response.data
  }

  return {
    listPosts,
    getPostsById,
    createPost
  }
}
