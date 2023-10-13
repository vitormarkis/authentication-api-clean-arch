import { RegisterUserUseCaseDTOInput } from "~/@core/domain/use-cases/register-user.dto"
import { Request, Response } from "express"
import RegisterUserUseCase from "~/@core/domain/use-cases/register-user.use-case"

export default class RegisterUserController {
  constructor(readonly registerUserUseCase: RegisterUserUseCase) {}

  async handle(request: Request, response: Response) {
    const input: RegisterUserUseCaseDTOInput = {
      username: request.body.username,
      password: request.body.password,
    }

    const output = await this.registerUserUseCase.execute(input)
    return response.json(output)
  }
}
