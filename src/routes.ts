import RegisterUserController from "@/register-user/controller"
import RegisterUserUseCase from "@/register-user/use-case"
import { Router } from "express"
import InMemoryUsersRepository from "@/in-memory-user-repository"
import ListUserController from "@/list-user/controller"
import ListUserUseCase from "@/list-user/use-case"

const usersRepository = new InMemoryUsersRepository()
const listUserUseCase = new ListUserUseCase(usersRepository)
const registerUserUseCase = new RegisterUserUseCase(usersRepository)

export const router = Router()

router.get("/users", async (request, response) => {
  return new ListUserController(listUserUseCase).handle(request, response)
})

router.post("/register", async (request, response) => {
  return new RegisterUserController(registerUserUseCase).handle(request, response)
})
