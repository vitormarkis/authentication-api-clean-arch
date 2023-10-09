import jwt from "jsonwebtoken"

import { NSTokenService, TokenService } from "@/@core/interfaces/token-service"

export default class TokenServiceImpl implements TokenService {
  constructor() {}

  generate({ subject }: NSTokenService.GenerateInput): NSTokenService.GenerateOutput {
    console.log({ env: process.env.APP_HASH })
    const token = jwt.sign({}, process.env.APP_HASH as string, {
      subject,
    })

    return {
      accessToken: token,
    }
  }
}
