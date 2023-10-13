import { UseCase } from "~/@core/domain/interfaces/use-case-interface"
import { PostsRepository } from "~/@core/domain/repositories/posts-repository"
import { UsersRepository } from "~/@core/domain/repositories/users-repository"
import {
  ListUserPostsUseCaseDTOInput,
  ListUserPostsUseCaseDTOOutput,
} from "~/@core/domain/use-cases/list-user-posts.dto"

export default class ListUserPostsUseCase
  implements UseCase<ListUserPostsUseCaseDTOInput, ListUserPostsUseCaseDTOOutput>
{
  constructor(
    readonly usersRepository: UsersRepository,
    readonly postsRepository: PostsRepository,
  ) {}

  async execute({ username }: ListUserPostsUseCaseDTOInput): Promise<ListUserPostsUseCaseDTOOutput> {
    const user = await this.usersRepository.getUserByUsername(username)
    if (!user) throw new Error("User not found")
    const userPosts = await this.postsRepository.getUserPosts({ username })

    return {
      user,
      hisPosts: userPosts,
    }
  }
}
