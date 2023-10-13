import { LoginUseCaseDTOInput } from "~/@core/domain/use-cases/login.dto"
import { Request, Response } from "express"
import LoginUseCase from "~/@core/domain/use-cases/login.use-case"

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
