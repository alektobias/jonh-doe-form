import {Router} from 'express'
import { prisma } from './database'
import { validateRequest } from 'zod-express-middleware';
import {z} from 'zod'
const routes = Router()

routes.get('/', async (req, res) => {
  res.send("o Servidor está rodando!")
})

routes.post(
  '/colors', 
  validateRequest({
    body: z.object({
      name: z.string({ required_error: "Campo obrigatório." }).nonempty("O campo não pode estar vazio."),
      email: z.string({ required_error: "Campo obrigatório." }).email("Insira um email válido."),
      cpf: z.string({ required_error: "Campo obrigatório." }).min(11, { message: "CPF possui no minimo 11 dígitos." }),
      color: z.string({ required_error: "Campo obrigatório." }),
    })
  }) ,
  async (req, res) => {
  
  const data = req.body

  const userColorAlreadySent = await prisma.favoriteColor.findUnique({where: {cpf: data.cpf}})

  if(!!userColorAlreadySent) return res.status(406).send("o usúario já enviou sua cor!")

  const colorCreated = await prisma.favoriteColor.create({
    data
  })
  
  return res.status(201).send(colorCreated)
})

export default routes;