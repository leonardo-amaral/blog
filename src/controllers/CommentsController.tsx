import { CommentsType } from '../@types/comments'
import { useApi } from '../hooks/useApi'

interface CreateCommentsProps {
  postId: string | undefined
  content: string | undefined
}

export const commentsKeys = {
  lsitComments: 'list-comments'
}

export const CommentsController = () => {
  const { api } = useApi()

  const listComments = async (id: string) => {
    const response = await api.get<CommentsType[]>(`comments/${id}`)
    return response.data
  }

  const createComment = async (data: CreateCommentsProps) => {
    const response = await api.post(`comments/`, data)

    return response.data
  }

  return {
    listComments,
    createComment
  }
}
