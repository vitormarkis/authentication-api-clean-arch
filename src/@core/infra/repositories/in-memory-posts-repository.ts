import Post from "@/@core/domain/entities/post"
import { PostsRepository, PostsRepositoryDTO } from "~/@core/domain/repositories/posts-repository"

export default class InMemoryPostsRepository implements PostsRepository {
  posts: Post[] = []

  constructor() {}

  async getUserPosts({
    username,
  }: PostsRepositoryDTO.GetUserPostsInput): PostsRepositoryDTO.GetUserPostsOutput {
    return this.posts.filter(p => p.authorUsername === username)
  }

  async create({
    authorUsername: authorId,
    content,
  }: PostsRepositoryDTO.CreateInput): PostsRepositoryDTO.CreateOutput {
    const newPost = new Post(content, authorId)

    this.posts.push(newPost)
    return newPost
  }
}
