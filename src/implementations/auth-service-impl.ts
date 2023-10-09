import bcrypt from "bcrypt"
import { AuthService, NSAuthService } from "@/interfaces/auth-service"

export default class AuthServiceImpl implements AuthService {
  readonly saltRounds: number = 10

  constructor(saltRounds?: number) {
    if (saltRounds) this.saltRounds = saltRounds
  }

  hashPassword({ password }: NSAuthService.HashPasswordInput): NSAuthService.HashPasswordOutput {
    const hashedPassword = bcrypt.hashSync(password, this.saltRounds)
    return hashedPassword
  }

  compare({ password, encryptedPassword }: NSAuthService.CompareInput): NSAuthService.CompareOutput {
    return bcrypt.compareSync(password, encryptedPassword)
  }
}
