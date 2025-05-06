import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from "./icons/PlusIcon"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <p className="bg-purple-500">
        Click on the Vite and React logos to learn more
      </p>
      <Button variant='primary' size='sm' text='hello' startIcon={<PlusIcon size='lg'/>} onClick={() => {}}/>
      <Button variant='secondary' size='sm' text='signup' onClick={() => {}}/>
      <Button variant='primary' size='sm' text='signin' onClick={() => {}}/>

    </>
  )
}

export default App
