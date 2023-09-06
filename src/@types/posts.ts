interface PostsType {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  authorId: string
  description: string
}

interface ListPostsType {
  posts: PostsType[]
}

interface PostsContentType {
  htmlContent: string
  posts: PostsType
}

export type { ListPostsType, PostsContentType, PostsType }
