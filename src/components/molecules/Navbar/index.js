import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

export default function NavigasiBar() {
    return (
    <>
    <Navbar bg="light">
        <Container>
            <Nav className="mr-auto">
                <Nav.Link href="#"><i className="fas fa-bars" style={sideBarButton}></i></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
    )
}

const  sideBarButton = {
    color: '#0036A0'
}
