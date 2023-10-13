import { UseCase } from "~/@core/domain/interfaces/use-case-interface"
import { UsersRepository } from "~/@core/domain/repositories/users-repository"
import { ListUserUseCaseDTOOutput } from "~/@core/domain/use-cases/list-user.dto"

export default class ListUserUseCase implements UseCase<never, ListUserUseCaseDTOOutput> {
  constructor(readonly usersRepository: UsersRepository) {}

  async execute(): Promise<ListUserUseCaseDTOOutput> {
    const users = await this.usersRepository.list()
    return users.map(u => ({
      data: {
        createdAt: u.createdAt.toISOString(),
        id: u.id,
        password: u.password,
        role: u.role.name,
        username: u.username,
      },
    }))
  }
}
