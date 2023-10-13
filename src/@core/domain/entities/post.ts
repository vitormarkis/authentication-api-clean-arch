export default class Post {
  #id: string = String(Math.random().toString(35).substring(0, 14))
  #createdAt: Date = new Date()
  content: string
  authorUsername: string

  constructor(content: string, authorUsername: string, id?: string, createdAt?: Date) {
    if (id) this.#id = id
    if (createdAt) this.#createdAt = createdAt
    this.content = content
    this.authorUsername = authorUsername
  }

  get id() {
    return this.#id
  }

  get createdAt() {
    return this.#createdAt
  }
}
