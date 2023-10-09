import ListUserUseCase from "@/list-user/use-case"
import { Request, Response } from "express"

export default class ListUserController {
  constructor(readonly listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response) {
    const output = await this.listUserUseCase.execute()
    return response.json(output)
  }
}
