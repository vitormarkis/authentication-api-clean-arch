import dotenv from "dotenv"
dotenv.config()

import { router } from "@/routes"

import express from "express"

export const app = express()

app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`Server starting at port ${process.env.PORT}`)
})
