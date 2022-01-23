export interface IUser {
  id: string
  name: string
  username: string
  email: string
}

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}
