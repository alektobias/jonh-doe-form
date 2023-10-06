import Input from './Input'
import ColorSelector from './ColorSelector'
import * as z from "zod"
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const formSchema = z.object({
  name: z.string({ required_error: "Campo obrigatório." }).min(2, "Insira um nome válido.").trim(),
  email: z.string({ required_error: "Campo obrigatório." }).email("Insira um email válido."),
  cpf: z.string({ required_error: "Campo obrigatório." }).min(11, { message: "CPF possui no minimo 11 dígitos." }).transform(val => val.replace(/\.|\-/g, "")),
  color: z.string({ required_error: "Campo obrigatório." }).regex(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g, { message: "A cor precisa estar em Hexadecimal" }),
})

export type FormSchemaType = z.infer<typeof formSchema>

interface FavoriteColorFormProps {
  onSubmit: SubmitHandler<FormSchemaType>
}


function FavoriteColorForm({ onSubmit }: FavoriteColorFormProps) {
  const [favoriteColor, setFavoriteColor] = useState<string | undefined>(undefined)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  })
  const handleColorSelection = (e: any) => setFavoriteColor(e.target.value)
  return (
    <form className='flex flex-col space-y-8 bg-zinc-800 p-4 rounded mb-4' onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-2" >
        <Input label="Nome Completo" register={register('name')} error={errors?.name?.message} />
        <Input label="CPF" register={register('cpf')} mask='999.999.999-99' error={errors?.cpf?.message} />
        <Input label="Email" type='email' register={register('email')} error={errors?.email?.message} />
        <ColorSelector register={register('color')} error={errors?.color?.message} getColor={handleColorSelection} />
      </div>



      <button className="bg-zinc-600 text-bold w-3/5 ml-auto rounded py-2" style={{ backgroundColor: favoriteColor }} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "submitting" : "Enviar"}
      </button>
    </form>
  )
}

export default FavoriteColorForm