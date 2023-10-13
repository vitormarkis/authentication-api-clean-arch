import User from "@/@core/domain/entities/user"
import { UsersRepository, UsersRepositoryDTO } from "~/@core/domain/repositories/users-repository"

export default class InMemoryUsersRepository implements UsersRepository {
  users: User[] = []

  constructor() {}

  async getUserByUsername(username: string): Promise<User | null> {
    return this.users.find(u => u.username === username) ?? null
  }

  async list(): Promise<User[]> {
    return this.users
  }

  async register({ password, username }: UsersRepositoryDTO.RegisterInput): Promise<User> {
    const newUser = new User(username, password)

    this.users.push(newUser)

    return newUser
  }
}
