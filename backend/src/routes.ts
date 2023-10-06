import { Router } from 'express'
import { prisma } from './database'
import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod'
const routes = Router()

routes.get('/', async (req, res) => {
  res.send("o Servidor está rodando!")
})

routes.post(
  '/colors',
  validateRequest({
    body: z.object({
      name: z.string({ required_error: "Campo obrigatório." }).min(2, "Insira um nome válido.").trim(),
      email: z.string({ required_error: "Campo obrigatório." }).email("Insira um email válido."),
      cpf: z.string({ required_error: "Campo obrigatório." }).min(11, { message: "CPF possui no minimo 11 dígitos." }).transform(val => val.replace(/\.|\-/g, "")),
      color: z.string({ required_error: "Campo obrigatório." }).regex(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g, { message: "A cor precisa estar em Hexadecimal" }),
    })
  }),
  async (req, res) => {
    const data = req.body

    const userColorAlreadySent = await prisma.favoriteColor.findUnique({ where: { cpf: data.cpf } })

    if (!!userColorAlreadySent) return res.status(406).send("o usúario já enviou sua cor!")

    const colorCreated = await prisma.favoriteColor.create({
      data
    })

    return res.status(201).send(colorCreated)
  }
)

export default routes;