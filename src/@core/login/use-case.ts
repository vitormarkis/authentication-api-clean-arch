import { AuthService } from "@/@core/interfaces/auth-service"
import { TokenService } from "@/@core/interfaces/token-service"
import { LoginUseCaseDTOInput, LoginUseCaseDTOOutput } from "@/@core/login/dto"
import { UseCase } from "@/use-case-interface"
import { UsersRepository } from "@/users-repository"

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

    const { accessToken } = this.tokenService.generate({ subject: user.id })

    return {
      accessToken,
      credentials: {
        username,
      },
    }
  }
}
