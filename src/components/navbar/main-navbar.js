
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';

import "./navbar-styles.css"

import ThemeSwitch from './theme-switch';
import AtomButton from '../another/atom-button';
import { useState } from 'react';

const NavBar = () => {
    const [show, setShow] = useState(false);
    return (

        <>

            <Navbar expand="lg" className="dark:text-white dark:bg-darkBlue bg-rose border-bottom"
            >
                <Container className='w-full'>
                    <Navbar.Brand href="#">
                        <div className=" nav-img flex dark:text-white ">
                            <a href="#projects">
                                <img src={require("../../images/logo.png")} alt="logotyp strony, czyli kwadrat z literą Ł"/>
                            </a>


                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={()=>{setShow(true)}} aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        show={show} 
                        onHide={()=>{setShow(false)}}
                        className='dark:text-white dark:bg-darkBlue'
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header className='bg-rose' closeButton >
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                <div className=" nav-img ps-10 flex dark:text-white ">
                                    <a to="#projects" alt="logotyp strony, czyli kwadrat z literą Ł">
                                        <img src={require("../../images/logo.png")} />
                                    </a>

                                </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className=" justify-content-center gap-3 flex-grow-1 align-items-start text-start">
                                <div className="d-block d-md-none w-full d-flex justify-content-center" >
                                    <ThemeSwitch />
                                </div>

                                <a onClick={()=>{setShow(false)}} href="#projects" className='pt-1 text-black m-auto m-md-0'>
                                    <AtomButton text="Projekty" />
                                </a>

                                <a onClick={()=>{setShow(false)}} href="#aboutme" className='pt-1 text-black m-auto m-md-0'>
                                    <AtomButton text="O mnie" />
                                </a>


                                <a onClick={()=>{setShow(false)}} href="#skills" className='pt-1 text-black  m-auto m-md-0'>
                                    <AtomButton text="Umiejętności" />
                                </a>

                                <a onClick={()=>{setShow(false)}} href="#hobby" className='pt-1 text-black  m-auto m-md-0'>
                                    <AtomButton text="Hobby" />
                                </a>

                                <a onClick={()=>{setShow(false)}} href="#contact" className='pt-1 text-black  m-auto m-md-0'>
                                    <AtomButton text="Kontakt" />
                                </a>

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

export default NavBar;