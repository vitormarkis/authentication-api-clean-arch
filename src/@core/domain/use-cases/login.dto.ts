export interface LoginUseCaseDTOInput {
  username: string
  password: string
}

export interface LoginUseCaseDTOOutput {
  data: {
    username: string
    role: string
  }
  accessToken: string
}
