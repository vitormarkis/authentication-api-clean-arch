import { router } from "@/routes"
import RegisterUserController from "@/register-user/controller"
import RegisterUserUseCase from "@/register-user/use-case"
import { Router } from "express"
import InMemoryUsersRepository from "@/in-memory-user-repository"
import ListUserController from "@/list-user/controller"
import ListUserUseCase from "@/list-user/use-case"

import express from "express"

export const app = express()

app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`Server starting at port ${process.env.PORT}`)
})
