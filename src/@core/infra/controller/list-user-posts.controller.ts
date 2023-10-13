import { Request, Response } from "express"
import ListUserPresenter from "~/@core/domain/use-cases/list-user-posts.presenter"
import ListUserPostsUseCase from "~/@core/domain/use-cases/list-user-posts.use-case"

export default class ListUserPostsController {
  constructor(
    readonly listUserPostsUseCase: ListUserPostsUseCase,
    readonly listUserPresenter: ListUserPresenter,
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const output = await this.listUserPostsUseCase.execute({
        username: request.params.username,
      })

      const responseJSON = this.listUserPresenter.toJSON(output)

      return response.json(responseJSON)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({
          messsage: error.message,
        })
      }
    }
  }
}
