import React from 'react'

import { Input } from 'rotenx-input-text-emojis'
import 'rotenx-input-text-emojis/dist/index.css'

const App = () => {
  return <Input onChange={(e) => {console.log(e)}} onEnter={(e) => {console.log(e)}}></Input>
}

export default App
