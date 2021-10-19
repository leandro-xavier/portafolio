import React from 'react';
import {NavLink} from 'react-router-dom'
import {Container, Nav, Navbar} from 'react-bootstrap'


const Navigation = () => {
    return (
        <div className="navigation">
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand >Leandro Mariscal</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                    <Nav.Link as={NavLink} to="/proyects">Proyects</Nav.Link>
                                     {/*investigar como hacer que se previsualize el curriculum en otra pagina y que tenga opcion de descargarse en el navegador */}    <Nav.Link as={NavLink} to="/curriculum">Curriculum</Nav.Link>
                                    
                                </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
