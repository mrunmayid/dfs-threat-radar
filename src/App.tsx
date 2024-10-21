import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>DFS Threat Radar.</h1>
      <div className="card">
        <Button variant="outlined" onClick={() => setCount((count) => count + 1)}>Count: {count}</Button>
      </div>
      <p className="read-the-docs">
        A single dashboard to track all you code vulnerabilities.
      </p>
    </>
  )
}

export default App
