interface RoleProps {
  permissions: Permissions[]
}

export default abstract class Role implements RoleProps {
  constructor(
    readonly name: RoleType,
    readonly permissions: Permissions[] = [],
  ) {}
}

export enum Permissions {
  SEE_ALL_USERS,
}

export type RoleType = "ADMIN" | "USER"
