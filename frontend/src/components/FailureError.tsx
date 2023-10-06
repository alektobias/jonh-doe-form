
import { Icon } from '@iconify/react';
interface FailureMessageProps {
  message: string;
}

function FailureMessage({ message }: FailureMessageProps) {
  return (
    <section className="bg-zinc-800 flex flex-col items-center rounded p-4 space-y-5">
      <div className="bg-red-400 rounded-full p-3">

        <Icon icon="ph:warning" fontSize={40} className='text-red-800' />
      </div>
      <p className="text-lg w-4/5 text-center">{message}</p>
    </section>
  )
}

export default FailureMessage