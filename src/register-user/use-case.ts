import { AuthService } from "@/interfaces/auth-service"
import { TokenService } from "@/interfaces/token-service"
import { RegisterUserUseCaseDTOInput, RegisterUserUseCaseDTOOutput } from "@/register-user/dto"
import { UseCase } from "@/use-case-interface"
import { UsersRepository } from "@/users-repository"

export default class RegisterUserUseCase
  implements UseCase<RegisterUserUseCaseDTOInput, RegisterUserUseCaseDTOOutput>
{
  constructor(
    readonly usersRepository: UsersRepository,
    readonly authService: AuthService,
    readonly tokenService: TokenService,
  ) {}
  async execute({ password, username }: RegisterUserUseCaseDTOInput): Promise<RegisterUserUseCaseDTOOutput> {
    const hashedPassword = await this.authService.hashPassword({ password })

    const { id } = await this.usersRepository.register({
      password: hashedPassword,
      username,
    })

    const { accessToken } = await this.tokenService.generate({ subject: id })

    return {
      accessToken,
      credentials: {
        username,
      },
    }
  }
}
