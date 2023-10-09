import { RegisterUserUseCaseDTOInput } from "@/register-user/dto"
import { UsersRepository } from "@/users-repository"

export default class RegisterUserUseCase {
  constructor(readonly usersRepository: UsersRepository) {}

  async execute({ password, username }: RegisterUserUseCaseDTOInput) {
    return this.usersRepository.register({
      password,
      username,
    })
  }
}
