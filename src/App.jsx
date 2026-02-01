import React, { useEffect } from 'react'
import './App.css'

const SKOOL_REDIRECT_URL = 'https://skool.com/vibecodepioneers'

function App() {
  useEffect(() => {
    window.location.replace(SKOOL_REDIRECT_URL)
  }, [])

  return null
}

export default App
