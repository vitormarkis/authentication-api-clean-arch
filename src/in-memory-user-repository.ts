import User from "@/user"
import { UsersRepository, UsersRepositoryDTO } from "@/users-repository"

export default class InMemoryUsersRepository implements UsersRepository {
  users: User[] = []

  constructor() {}

  async list(): Promise<User[]> {
    return this.users
  }

  async register({ password, username }: UsersRepositoryDTO.RegisterInput): Promise<User> {
    const newUser = new User(username, password)

    this.users.push(newUser)

    return newUser
  }
}
