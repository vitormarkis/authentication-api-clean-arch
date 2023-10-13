export interface RegisterUserUseCaseDTOInput {
  username: string
  password: string
}

export interface RegisterUserUseCaseDTOOutput {
  credentials: {
    username: string
    role: string
  }
  accessToken: string
}
