import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout/>
    </>

  )
}

export default App
