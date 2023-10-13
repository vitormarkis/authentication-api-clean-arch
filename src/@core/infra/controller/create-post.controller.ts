import { CreatePostUseCaseDTOInput } from "~/@core/domain/use-cases/create-post.dto"
import { Request, Response } from "express"
import CreatePostUseCase from "~/@core/domain/use-cases/create-post.use-case"
import { TokenService } from "~/@core/domain/interfaces/token-service"

export default class CreatePostController {
  constructor(
    readonly createPostUseCase: CreatePostUseCase,
    readonly tokenService: TokenService,
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const input: CreatePostUseCaseDTOInput = {
        content: request.body.content,
        authorUsername: request.user.username,
      }

      const output = await this.createPostUseCase.execute(input)
      return response.json(output)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({
          messsage: error.message,
        })
      }
    }
  }
}
