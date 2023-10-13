import Post from "@/@core/domain/entities/post"

export namespace PostsRepositoryDTO {
  export type CreateInput = {
    content: string
    authorUsername: string
  }
  export type CreateOutput = Promise<Post>
  export type GetUserPostsInput = {
    username: string
  }
  export type GetUserPostsOutput = Promise<Post[]>
}

export interface PostsRepository {
  create(input: PostsRepositoryDTO.CreateInput): PostsRepositoryDTO.CreateOutput
  getUserPosts(input: PostsRepositoryDTO.GetUserPostsInput): PostsRepositoryDTO.GetUserPostsOutput
}
