

import Navbar from './components/navbar/main-navbar';
import Pages from './pages/pagecreator';
import AOS from 'aos';
import "aos/dist/aos.css";
import Footer from './components/footer';
import { useEffect } from 'react';


export default function App() {



  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector("html").classList.add("dark")
    }
  }, [])
  return (
    <div className=' p-0 m-0' style={{width: "90vw !important", overflow : "hidden !important"}}>
      <Navbar />
      <Pages />
      <Footer/>
    </div>
  )
}
