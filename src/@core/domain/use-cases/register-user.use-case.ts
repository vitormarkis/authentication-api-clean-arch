import {
  RegisterUserUseCaseDTOInput,
  RegisterUserUseCaseDTOOutput,
} from "~/@core/domain/use-cases/register-user.dto"
import { UseCase } from "~/@core/domain/interfaces/use-case-interface"
import { UsersRepository } from "~/@core/domain/repositories/users-repository"
import { AuthService } from "~/@core/domain/interfaces/auth-service"
import { TokenService } from "~/@core/domain/interfaces/token-service"

export default class RegisterUserUseCase
  implements UseCase<RegisterUserUseCaseDTOInput, RegisterUserUseCaseDTOOutput>
{
  constructor(
    readonly usersRepository: UsersRepository,
    readonly authService: AuthService,
    readonly tokenService: TokenService,
  ) {}
  async execute({ password, username }: RegisterUserUseCaseDTOInput): Promise<RegisterUserUseCaseDTOOutput> {
    const hashedPassword = this.authService.hashPassword({ password })

    await this.usersRepository.register({
      password: hashedPassword,
      username,
    })

    const { accessToken } = this.tokenService.generate({ subject: username })

    return {
      accessToken,
      credentials: {
        username,
      },
    }
  }
}
