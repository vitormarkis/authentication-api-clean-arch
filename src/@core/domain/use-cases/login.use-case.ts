import { LoginUseCaseDTOInput, LoginUseCaseDTOOutput } from "~/@core/domain/use-cases/login.dto"
import { UseCase } from "~/@core/domain/interfaces/use-case-interface"
import { AuthService } from "~/@core/domain/interfaces/auth-service"
import { TokenService } from "~/@core/domain/interfaces/token-service"
import { UsersRepository } from "~/@core/domain/repositories/users-repository"

export default class LoginUseCase implements UseCase<LoginUseCaseDTOInput, LoginUseCaseDTOOutput> {
  constructor(
    readonly usersRepository: UsersRepository,
    readonly authService: AuthService,
    readonly tokenService: TokenService,
  ) {}

  async execute({ password, username }: LoginUseCaseDTOInput): Promise<LoginUseCaseDTOOutput> {
    const user = await this.usersRepository.getUserByUsername(username)

    if (!user) throw new Error("User not found.")

    const isAuthorized = this.authService.compare({
      encryptedPassword: user.password,
      password,
    })

    if (!isAuthorized) {
      throw new Error("Invalid password.")
    }

    const { accessToken } = this.tokenService.generate({ subject: user.username })

    return {
      accessToken,
      credentials: {
        username,
      },
    }
  }
}
