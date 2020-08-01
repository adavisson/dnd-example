import React from 'react'
import './App.css'
import Knight from './components/Knight'
import Square from './components/Square'

function App() {
  return (
    <Square black>
      <Knight />
    </Square>
  )
}

export default App
