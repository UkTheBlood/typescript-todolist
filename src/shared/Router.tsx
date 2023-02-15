import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Working from '../pages/Working'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Working />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router