import { RegisterUserUseCaseDTOInput } from "@/register-user/dto"
import RegisterUserUseCase from "@/register-user/use-case"
import { Request, Response } from "express"

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
