import { useState } from 'react'
import {BatteryWarning} from 'lucide-react'
import './App.css'

function App() {

  return (
    <>
      <h1>Test</h1>
      <p>Test</p>
      <button className="btn btn-blue">Test</button>
      <input type="text" placeholder='Test' className="btn btn-blue" />
      <BatteryWarning />
    </>
  )
}

export default App
