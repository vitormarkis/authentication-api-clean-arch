import { Request, Response } from "express"
import AdminRole from "~/@core/domain/entities/role/admin-role"
import { AuthService } from "~/@core/domain/interfaces/auth-service"
import { TokenService } from "~/@core/domain/interfaces/token-service"
import AdminUserUseCase from "~/@core/domain/use-cases/get-admin.use-case"

export default class GetAdminController {
  constructor(
    private readonly adminUserUseCase: AdminUserUseCase,
    private readonly tokenService: TokenService,
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const authorizationToken = request.headers.authorization
      if (!authorizationToken) throw new Error("No authorization token provided.")

      const [bearer, tokenHeader] = authorizationToken.split(" ")
      if (bearer.toLowerCase() !== "bearer") {
        throw new Error("Invalid token provided")
      }

      const { subject: username } = this.tokenService.validate({ tokenHeader })

      const output = await this.adminUserUseCase.execute({
        role: new AdminRole(),
        username,
      })

      return response.status(200).json(output)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({
          messsage: error.message,
        })
      }
    }
  }
}
