import { UsersRepository } from "@/users-repository"

export default class ListUserUseCase {
  constructor(readonly usersRepository: UsersRepository) {}

  async execute() {
    return this.usersRepository.list()
  }
}
