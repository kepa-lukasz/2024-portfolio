
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Colors from './pages/colors';
import Navbar from './components/navbar';
import Home from './pages/home/main-home';

export default function App() {
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
