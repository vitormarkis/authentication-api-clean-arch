export namespace NSTokenService {
  export type GenerateInput = {
    subject: string
  }
  export type GenerateOutput = {
    accessToken: string
  }
  export type ValidateInput = {
    tokenHeader: string
  }
  export type ValidateOutput = {
    subject: string
  }
}

export interface TokenService {
  generate(props: NSTokenService.GenerateInput): NSTokenService.GenerateOutput
  validate(props: NSTokenService.ValidateInput): NSTokenService.ValidateOutput
}
