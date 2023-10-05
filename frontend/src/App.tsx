import './App.css'
import { useCallback, useEffect } from 'react'
import Input from './components/Input'
import ColorSelector from './components/ColorSelector'
import * as z from "zod"
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// Nome completo, CPF, email, cor predilet (em um arco-iris )

const formSchema = z.object({
  name: z.string({ required_error: "Campo obrigatório." }).nonempty("O campo não pode estar vazio."),
  email: z.string({ required_error: "Campo obrigatório." }).email("Insira um email válido."),
  cpf: z.string({ required_error: "Campo obrigatório." }).min(11, { message: "CPF possui no minimo 11 dígitos." }),
  color: z.string({ required_error: "Campo obrigatório." }),
})

type FormSchemaType = z.infer<typeof formSchema>

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  const onSubmit: SubmitHandler<FormSchemaType> = useCallback(
    (data) => {
      console.log(data)
    }, [])

  useEffect(() => { console.log(errors) }, [errors])

  return (
    <main className="w-80">
      <form className='flex flex-col space-y-8' onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2" >
          <Input label="Nome Completo" register={register('name')} error={errors?.name?.message} />
          <Input label="CPF" register={register('cpf')} mask='999.999.999-99' error={errors?.cpf?.message} />
          <Input label="Email" type='email' register={register('email')} error={errors?.email?.message} />
          <ColorSelector register={register('color')} error={errors?.color?.message} />
        </div>

        <button className="bg-zinc-600 w-3/5 ml-auto rounded py-2 " type="submit">
          Enviar
        </button>
      </form>
    </main>
  )
}

export default App
