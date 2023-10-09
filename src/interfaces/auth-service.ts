export namespace NSAuthService {
  export type HashPasswordInput = {
    password: string
  }
  export type HashPasswordOutput = string
  export type CompareInput = {
    password: string
    encryptedPassword: string
  }
  export type CompareOutput = boolean
}

export interface AuthService {
  hashPassword(props: NSAuthService.HashPasswordInput): NSAuthService.HashPasswordOutput
  compare(props: NSAuthService.CompareInput): NSAuthService.CompareOutput
}
