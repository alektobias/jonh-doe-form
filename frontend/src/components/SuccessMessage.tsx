import { Icon } from '@iconify/react';

function SuccessMessage() {
  return (
    <section className="bg-zinc-800 flex flex-col items-center rounded p-4 space-y-5">
      <div className="bg-green-300 rounded-full p-3">
        <Icon icon="ph:check" fontSize={40} className='text-green-800' />
      </div>
      <p className="text-lg w-4/5 text-center">A sua cor predileta foi cadastrada com successo ! </p>
    </section>
  )
}

export default SuccessMessage