import React, {useState} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import SideBar from '../SideBar';

export default function NavigasiBar() {

    return (
    <>
    <SideBar style={displaySide}/>
    <Navbar bg="light">
        <Container>
            <Nav className="mr-auto">
                <Nav.Link ><i className="fas fa-bars" style={sideBarButton}></i></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
    )
}

const  sideBarButton = {
    color: '#0036A0'
}

const displaySide ={
    display: 'none'
}
