import { UseCase } from "~/@core/domain/interfaces/use-case-interface"
import { UsersRepository } from "~/@core/domain/repositories/users-repository"
import { GetAdminDTO } from "~/@core/domain/use-cases/get-admin.dto"

export default class GetAdminUseCase implements UseCase<GetAdminDTO.Input, GetAdminDTO.Output> {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({ role, username }: GetAdminDTO.Input): Promise<GetAdminDTO.Output> {
    const user = await this.usersRepository.getUserByUsername(username)
    if (!user) throw new Error("User not found!")
    user.assignRole(role)
    await this.usersRepository.update(user)

    return {
      data: {
        createdAt: user.createdAt.toISOString(),
        id: user.id,
        password: user.password,
        role: user.role.name,
        username: user.username,
      },
      message: "User's role set to Admin.",
    }
  }
}
