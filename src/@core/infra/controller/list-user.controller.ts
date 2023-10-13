import { Request, Response } from "express"
import ListUserUseCase from "~/@core/domain/use-cases/list-user.use-case"

export default class ListUserController {
  constructor(readonly listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const output = await this.listUserUseCase.execute()
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
