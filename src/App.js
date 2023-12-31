
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Colors from './pages/colors';
import Navbar from './components/navbar/main-navbar';
import Home from './pages/home/main-home';

export default function App() {
  return (
    <BrowserRouter>
      <div className=' p-0 m-0'>
      <Navbar />
        <Routes>
          <Route path="colors" element={<Colors />} />
          <Route path="" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
