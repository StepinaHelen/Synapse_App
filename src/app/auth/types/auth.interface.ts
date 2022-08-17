export interface ResponseI {
  success: boolean,
  message: string
  token: string
}

export interface UserI {
  id?: number
  username: string
  password: string
}