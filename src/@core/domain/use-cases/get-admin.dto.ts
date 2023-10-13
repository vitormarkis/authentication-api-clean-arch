import Role from "~/@core/domain/entities/role/role"

export namespace GetAdminDTO {
  export type Input = {
    username: string
    role: Role
  }

  export type Output = {
    message: "User's role set to Admin."
    data: {
      id: string
      createdAt: string
      username: string
      password: string
      role: string
    }
  }
}
