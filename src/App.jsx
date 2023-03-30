import { useState } from 'react'
import './App.css'
import Card from './Component/Card/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card></Card>
    </div>
  )
}

export default App
