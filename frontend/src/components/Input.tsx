import { InputHTMLAttributes } from "react";
import MaskedInput from 'react-input-mask';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  mask?: string
  register?: any;
}

function Input({ label, error, mask, register, ...rest }: InputProps) {
  return (
    <label className="flex flex-col items-start min-w-2xl w-full">
      <span className="text-sm mb-1">{label}</span>
      {!mask ? (<input className="px-2 py-2 rounded w-full"  {...rest} {...register} />) : (<MaskedInput mask={mask} className="px-2 py-2 rounded w-full"  {...rest} {...register} />)}

      {error && (<span className="text-xs text-red-500 italic">
        {error}
      </span>)}
    </label>
  )
}

export default Input