import { LoginUseCaseDTOInput } from "@/@core/login/dto"
import LoginUseCase from "@/@core/login/use-case"
import { Request, Response } from "express"

export default class LoginController {
  constructor(readonly loginUseCase: LoginUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const input: LoginUseCaseDTOInput = {
        username: request.body.username,
        password: request.body.password,
      }

      const output = await this.loginUseCase.execute(input)
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
