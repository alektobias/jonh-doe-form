import { InputHTMLAttributes } from "react";

const rainbowColors = [
  '#ef4444',    // Red
  '#f97316',    // Orange
  '#eab308',    // Yellow
  '#22c55e',    // Green
  '#3b82f6',    // Blue
  '#6366f1',    // Indigo
  '#8b5cf6'     // Violet
];
interface ColorSelectorProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register: any;
  getColor: React.FormEventHandler<HTMLFieldSetElement> 
}


function ColorSelector({ error, register, getColor, ...rest }: ColorSelectorProps) {

  return (
    <fieldset className="flex flex-col items-start space-y-2" id="color" onChange={getColor}>
      <legend className="w-full text-left">
        <span>Cor predileta</span>
      </legend>
      <div className="flex justify-center space-x-4 w-full">
        {rainbowColors.map((color) =>
        (<label className='flex rounded-full checked:border-4' style={{ backgroundColor: color }}>
          <input
            className='w-6 h-6 opacity-0  cursor-pointer checked:border checked:opacity-40 border'
            type='radio'
            name="color"
            value={color}
            {...rest}
            {...register}
          />
        </label>)
        )}
      </div>
      {error && <span className="text-xs text-red-500 italic">{error}</span>}
    </fieldset>
  )
}

export default ColorSelector