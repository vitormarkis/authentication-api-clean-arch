import Role, { Permissions } from "~/@core/domain/entities/role/role"

export default class AdminRole extends Role {
  constructor() {
    super("ADMIN", [Permissions.SEE_ALL_USERS])
  }
}
