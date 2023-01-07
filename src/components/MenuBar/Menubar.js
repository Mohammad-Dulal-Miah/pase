import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const Menubar = () => {
    return (
        <div  className='navbar-container container'>
             <h2><span style={{color: "tomato"}}>Pase</span></h2>
             <Navbar  sticky="top">
               <Container>
                    <Nav className="me-auto">
                        <Link to="/home">Home</Link>
                        <Link to="/categories">Categories</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/profile">Profile</Link>
                    </Nav>
                </Container>
             </Navbar>
        </div>
    );
};

export default Menubar;