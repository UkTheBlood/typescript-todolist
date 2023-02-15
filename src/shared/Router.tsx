import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Working from '../pages/Working'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/working/:id" element={<Working />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router