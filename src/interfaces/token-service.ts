export namespace NSTokenService {
  export type GenerateInput = {
    subject: string
  }
  export type GenerateOutput = {
    accessToken: string
  }
}

export interface TokenService {
  generate(props: NSTokenService.GenerateInput): NSTokenService.GenerateOutput
}
