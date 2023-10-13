import {
  ListUserPostsPresenterDTOInput,
  ListUserPostsPresenterDTOOutput,
} from "~/@core/domain/use-cases/list-user-posts.dto"

export default class ListUserPresenter {
  constructor() {}

  toJSON({ user, hisPosts }: ListUserPostsPresenterDTOInput): ListUserPostsPresenterDTOOutput {
    return {
      user: {
        createdAt: user.createdAt.toISOString(),
        id: user.id,
        username: user.username,
        posts: hisPosts.map(p => ({
          content: p.content,
          createdAt: p.createdAt.toISOString(),
          id: p.id,
        })),
      },
    }
  }
}
