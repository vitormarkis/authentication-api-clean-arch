import RegisterUserController from "@/@core/register-user/controller"
import RegisterUserUseCase from "@/@core/register-user/use-case"
import { Router } from "express"
import InMemoryUsersRepository from "@/in-memory-user-repository"
import ListUserController from "@/@core/list-user/controller"
import ListUserUseCase from "@/@core/list-user/use-case"
import AuthServiceImpl from "@/implementations/auth-service-impl"
import TokenServiceImpl from "@/implementations/token-service-impl"

const authService = new AuthServiceImpl()
const tokenService = new TokenServiceImpl()

const usersRepository = new InMemoryUsersRepository()
const listUserUseCase = new ListUserUseCase(usersRepository)
const registerUserUseCase = new RegisterUserUseCase(usersRepository, authService, tokenService)

export const router = Router()

router.get("/users", async (request, response) => {
  return new ListUserController(listUserUseCase).handle(request, response)
})

router.post("/register", async (request, response) => {
  return new RegisterUserController(registerUserUseCase).handle(request, response)
})
