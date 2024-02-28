
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Colors from './pages/colors';
import Navbar from './components/navbar/main-navbar';
import Home from './pages/home/main-home';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.querySelector("html").classList.add("dark")
      }
  }, [])
  return (
    <BrowserRouter>
      <Navbar />
      <div className='w-full p-0 m-0'>
        <Routes>
          <Route path="colors" element={<Colors />} />
          <Route path="" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
