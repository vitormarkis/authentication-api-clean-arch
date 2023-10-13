import Post from "@/@core/domain/entities/post"
import User from "@/@core/domain/entities/user"

export interface ListUserPostsUseCaseDTOInput {
  username: string
}

export interface ListUserPostsUseCaseDTOOutput {
  user: User
  hisPosts: Post[]
}

export interface ListUserPostsPresenterDTOInput {
  user: User
  hisPosts: Post[]
}

export interface ListUserPostsPresenterDTOOutput {
  user: {
    id: string
    createdAt: string
    username: string
    posts: Array<{
      id: string
      createdAt: string
      content: string
    }>
  }
}
