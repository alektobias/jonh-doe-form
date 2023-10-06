import './App.css'
import { useCallback, useState } from 'react'

import { client } from './clients/axios'
import { Icon } from '@iconify/react';
import FavoriteColorForm, { FormSchemaType } from './components/FavoriteColorForm'
import { SubmitHandler } from 'react-hook-form';
import SuccessMessage from './components/SuccessMessage';
import FailureMessage from './components/FailureError';







function App() {

  const [submitStatus, setSubmitStatus] = useState<{ status: 'filling' | 'success' | 'failure', message?: string }>({ status: 'filling' })




  const onSubmit: SubmitHandler<FormSchemaType> = useCallback(
    (data) => {
      client.post('/colors', data).then(() => setSubmitStatus({ status: 'success' })).catch(err => setSubmitStatus({ status: 'failure', message: err.response.data }))
    }, [])

  return (
    <main className="w-80">
      {submitStatus.status === 'filling' && (<FavoriteColorForm onSubmit={onSubmit} />)}
      {submitStatus.status === 'success' && <SuccessMessage />}
      {submitStatus.status === 'failure' && <FailureMessage message={submitStatus?.message || "Algo deu errado, tente novamente mais tarde!"} />}
    </main>
  )
}

export default App
