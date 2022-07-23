import React from 'react'
import { Input } from 'rotenx-input-text-emojis'
import 'rotenx-input-text-emojis/dist/index.css'
import './index.css'
const App = () => {
  return <div className='main' ><Input onChange={(e) => {console.log(e)}} onEnter={(e) => {console.log(e)}}></Input></div>
}

export default App
