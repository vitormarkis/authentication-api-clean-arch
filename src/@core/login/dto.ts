export interface LoginUseCaseDTOInput {
  username: string
  password: string
}

export interface LoginUseCaseDTOOutput {
  credentials: {
    username: string
  }
  accessToken: string
}
