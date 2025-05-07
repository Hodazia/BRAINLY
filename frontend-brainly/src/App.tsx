import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/ui/Card'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <p className="bg-purple-500">
        Click on the Vite and React logos to learn more
      </p>
      <Button variant='primary' size='sm' text='hello' startIcon={<PlusIcon />} onClick={() => {}}/>
      <Button variant='secondary' size='sm' text='signup' onClick={() => {}}/>
      <Button variant='primary' size='sm' text='signin' onClick={() => {}}/>
      <Button 
      variant='primary'
      startIcon={<PlusIcon />}
      endIcon={<ShareIcon />}
      size="lg"
      text="share"
      />
      <div className='flex'>
      <Card title='peoples Blogs' link='https://www.youtube.com/watch?v=CBH1q10DjY0&t=2174s' type='youtube'/>
      <Card title='first tweet' link='https://x.com/NischalShetty02/status/1920090957791248818' type='twitter'/>
      </div>
    </>
  )
}

export default App
