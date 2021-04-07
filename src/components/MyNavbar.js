//import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';

import { faBell } from '@fortawesome/free-regular-svg-icons'

//import { Button } from 'bootstrap';

function MyNavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App"> 
      <Navbar color="light" light expand="md" className="bg-dark navbar-dark ">
        <NavbarBrand href="/survey-list">SURVEY RABBIT <FontAwesomeIcon icon={faBell} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
            <NavItem>
              <NavLink href="/create">Create survey</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/survey-list">Survey list</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/result-list">Result list</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/create-account">Create account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Log in</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText><a href="/">Log out</a></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
