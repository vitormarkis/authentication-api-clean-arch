import Role from "~/@core/domain/entities/role/role"
import User from "~/@core/domain/entities/user"

export interface RoleService {
  assignRole(user: User, role: Role): void
}
