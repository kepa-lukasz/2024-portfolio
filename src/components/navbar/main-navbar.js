import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./navbar-styles.css"

import { Link } from 'react-router-dom';
import ThemeSwitch from './theme-switch';
import AtomButton from '../another/atom-button';
import { useEffect, useRef, useState } from 'react';

function OffcanvasExample() {
    const home = useRef()
    const projects = useRef()
    const contact = useRef()
    const refList = [home, projects, contact]
    const [webPosition, setwebPosition] = useState(0);
    useEffect(() => {
        const sections = document.querySelectorAll(".section");
        const sections_array = Array.from(sections);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setwebPosition(sections_array.indexOf(entry.target))

                }

            })
        }, { rootMargin: "0px 0px -20% 0px" })
        sections.forEach(el => { observer.observe(el) })
    }, [])
    useEffect(() => {
        console.log(webPosition)
        refList.forEach(el => {
            if (el.current) {
                el.current.classList.remove("current")
            }
        })
        
        refList[webPosition].current.classList.add("current")

    }, [webPosition])
    return (
        <>

            <Navbar expand="md" className="dark:text-white dark:bg-darkBlue bg-rose border-bottom"
            >
                <Container fluid>
                    <Navbar.Brand href="#">
                        <div className=" nav-img flex dark:text-white ">
                            <a href="#home">
                                <img src={require("../../images/logo.png")} />
                            </a>


                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        className='dark:text-white'
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                <div className=" nav-img ps-10 flex dark:text-white ">
                                    <a to="/">
                                        <img src={require("../../images/logo.png")} />
                                    </a>

                                </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center gap-3 flex-grow-1 align-items-start text-start">
                                <div className="d-block d-md-none w-full d-flex justify-content-center" >
                                    <ThemeSwitch />
                                </div>

                                <Nav.Link href="#home" ref={home} className='home w-full md:w-fit dark:text-white justify-content-center d-flex'>
                                    <AtomButton text="Home" />

                                </Nav.Link>


                                <Nav.Link href="#projects" ref={projects} className=' w-full md:w-fit dark:text-white justify-content-center d-flex'>
                                    <AtomButton text="Projekty" />

                                </Nav.Link>


                                <Nav.Link href="#contact" ref={contact} className='contact w-full md:w-fit dark:text-white justify-content-center d-flex'>
                                    <AtomButton text="Kontakt" />
                                </Nav.Link>

                            </Nav>
                            <div className="d-none d-md-block" >
                                <ThemeSwitch />
                            </div>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default OffcanvasExample;