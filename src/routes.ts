import { Router } from "express"
import AdminUserUseCase from "~/@core/domain/use-cases/get-admin.use-case"
import CreatePostUseCase from "~/@core/domain/use-cases/create-post.use-case"
import ListUserPresenter from "~/@core/domain/use-cases/list-user-posts.presenter"
import ListUserPostsUseCase from "~/@core/domain/use-cases/list-user-posts.use-case"
import ListUserUseCase from "~/@core/domain/use-cases/list-user.use-case"
import LoginUseCase from "~/@core/domain/use-cases/login.use-case"
import RegisterUserUseCase from "~/@core/domain/use-cases/register-user.use-case"
import CreatePostController from "~/@core/infra/controller/create-post.controller"
import GetAdminController from "~/@core/infra/controller/get-admin.controller"
import ListUserPostsController from "~/@core/infra/controller/list-user-posts.controller"
import ListUserController from "~/@core/infra/controller/list-user.controller"
import LoginController from "~/@core/infra/controller/login.controller"
import RegisterUserController from "~/@core/infra/controller/register-user.controller"
import AuthServiceImpl from "~/@core/infra/implementations/auth-service-impl"
import TokenServiceImpl from "~/@core/infra/implementations/token-service-impl"
import InMemoryPostsRepository from "~/@core/infra/repositories/in-memory-posts-repository"
import InMemoryUsersRepository from "~/@core/infra/repositories/in-memory-user-repository"
import GetAdminUseCase from "~/@core/domain/use-cases/get-admin.use-case"

const authService = new AuthServiceImpl()
const tokenService = new TokenServiceImpl()

const usersRepository = new InMemoryUsersRepository()
const postsRepository = new InMemoryPostsRepository()

const getAdminUseCase = new GetAdminUseCase(usersRepository)

const listUserPostsUseCase = new ListUserPostsUseCase(usersRepository, postsRepository)
const createPostUseCase = new CreatePostUseCase(postsRepository)
const listUserUseCase = new ListUserUseCase(usersRepository)
const loginUseCase = new LoginUseCase(usersRepository, authService, tokenService)
const registerUserUseCase = new RegisterUserUseCase(usersRepository, authService, tokenService)

const listUserPresenter = new ListUserPresenter()

export const router = Router()

router.get("/users", async (request, response) => {
  return new ListUserController(listUserUseCase).handle(request, response)
})

router.post("/register", async (request, response) => {
  return new RegisterUserController(registerUserUseCase).handle(request, response)
})

router.post("/login", async (request, response) => {
  return new LoginController(loginUseCase).handle(request, response)
})

router.post("/posts", async (request, response) => {
  return new CreatePostController(createPostUseCase, tokenService).handle(request, response)
})

router.get("/posts/:username", async (request, response) => {
  return new ListUserPostsController(listUserPostsUseCase, listUserPresenter).handle(request, response)
})

router.put("/get-admin", async (request, response) => {
  return new GetAdminController(getAdminUseCase, tokenService).handle(request, response)
})
