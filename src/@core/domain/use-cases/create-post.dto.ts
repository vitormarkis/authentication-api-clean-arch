import Post from "@/@core/domain/entities/post"

export interface CreatePostUseCaseDTOInput {
  content: string
  authorUsername: string
}

export type CreatePostUseCaseDTOOutput = Post
