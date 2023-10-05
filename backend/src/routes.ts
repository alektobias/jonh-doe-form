import {Router} from 'express'
import { prisma } from './database'

const routes = Router()

routes.get('/', (req, res) => {
  prisma.favoriteColor.create({
    data: {
      name: "Alek Tobias",
      email: "alekobias@gmail.com",
      cpf: "09343184417",
      color: "#7159c1"
    }
  })
  res.send("helloooow")
})

export default routes;