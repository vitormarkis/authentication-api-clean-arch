import Role from "~/@core/domain/entities/role/role"
import UserRole from "~/@core/domain/entities/role/user-role"

export default class User {
  #id: string = String(Math.random().toString(35).substring(0, 14))
  #createdAt: Date = new Date()
  username: string
  password: string
  role: Role = new UserRole()

  constructor(username: string, password: string, id?: string, createdAt?: Date) {
    if (id) this.#id = id
    if (createdAt) this.#createdAt = createdAt
    this.username = username
    this.password = password
  }

  assignRole(role: Role) {
    this.role = role
  }

  get id() {
    return this.#id
  }

  get createdAt() {
    return this.#createdAt
  }
}
