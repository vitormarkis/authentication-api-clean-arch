import Role from "~/@core/domain/entities/role/role"

export default class UserRole extends Role {
  constructor() {
    super("USER")
  }
}
