import User from "@/@core/domain/entities/user"

export namespace UsersRepositoryDTO {
  export interface RegisterInput {
    username: string
    password: string
  }
}

export interface UsersRepository {
  register(input: UsersRepositoryDTO.RegisterInput): Promise<User>
  list(): Promise<User[]>
  getUserByUsername(username: string): Promise<User | null>
  update(user: User): Promise<void>
}
