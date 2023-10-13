import User from "~/@core/domain/entities/user"

declare global {
  namespace Express {
    interface Request {
      user: User
    }
  }
}
