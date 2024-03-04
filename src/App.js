

import Navbar from './components/navbar/main-navbar';
import Pages from './pages/pagecreator';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.querySelector("html").classList.add("dark")
      }
  }, [])
  return (
      <div className=' p-0 m-0'>
      <Navbar />
        <Pages/>
      </div>
  )
}
