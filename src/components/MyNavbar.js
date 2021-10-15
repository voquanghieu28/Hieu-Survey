//import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

import { faCarrot } from "@fortawesome/free-solid-svg-icons";

//import { Button } from 'bootstrap';

function MyNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <Navbar color="light" light expand="md" className="bg-dark navbar-dark ">
        <NavbarBrand href="/survey-list">
          SURVEY RABBIT <FontAwesomeIcon icon={faCarrot} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/create">CREATE SURVEY</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/survey-list">TAKE SURVEY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/result-list">SURVEY RESULTS</NavLink>
            </NavItem>
            {/** 
             * 
             * <NavItem>
              <NavLink href="/edit-survey">EDIT SURVEY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/create-account">ADMIN ACCOUNT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Log in</NavLink>
            </NavItem>
            */}
          </Nav>

          {/** 
          <NavbarText>
            <a href="/">Log out</a>
          </NavbarText>
          */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
