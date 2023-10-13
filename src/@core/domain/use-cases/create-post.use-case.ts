import {
  CreatePostUseCaseDTOInput,
  CreatePostUseCaseDTOOutput,
} from "~/@core/domain/use-cases/create-post.dto"
import { UseCase } from "~/@core/domain/interfaces/use-case-interface"
import { PostsRepository } from "~/@core/domain/repositories/posts-repository"

export default class CreatePostUseCase
  implements UseCase<CreatePostUseCaseDTOInput, CreatePostUseCaseDTOOutput>
{
  constructor(readonly postsRepository: PostsRepository) {}

  async execute({ content, authorUsername }: CreatePostUseCaseDTOInput): Promise<CreatePostUseCaseDTOOutput> {
    const post = await this.postsRepository.create({
      content,
      authorUsername,
    })

    return post
  }
}
