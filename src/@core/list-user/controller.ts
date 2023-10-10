import ListUserUseCase from "@/@core/list-user/use-case"
import { Request, Response } from "express"

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
