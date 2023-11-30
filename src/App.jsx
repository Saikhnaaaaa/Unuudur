import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage/>}></Route>
      </Routes>
    </div>
  )
}

export default App