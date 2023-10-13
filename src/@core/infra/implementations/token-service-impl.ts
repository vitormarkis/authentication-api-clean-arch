import jwt from "jsonwebtoken"
import { NSTokenService, TokenService } from "~/@core/domain/interfaces/token-service"

export default class TokenServiceImpl implements TokenService {
  constructor() {}
  validate({ tokenHeader }: NSTokenService.ValidateInput): NSTokenService.ValidateOutput {
    const decodedToken = jwt.verify(tokenHeader, process.env.APP_HASH as string)

    if (typeof decodedToken === "object" && decodedToken.sub) {
      return {
        subject: decodedToken.sub,
      }
    }

    throw new Error("Invalid decoded token format.")
  }

  generate({ subject }: NSTokenService.GenerateInput): NSTokenService.GenerateOutput {
    const token = jwt.sign({}, process.env.APP_HASH as string, {
      subject,
      expiresIn: "1m",
    })

    return {
      accessToken: token,
    }
  }
}
