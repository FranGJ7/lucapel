import { logo1 } from "../../assets";
import { Link } from "react-router-dom";
import styles from "./header.module.scss" 
import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem} from 'reactstrap';

 const Header = () =>{

    
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar  expand="md" color="faded" light>
          <NavbarBrand className="me-auto">
            <img className={styles.imgLogo} src={logo1} alt="LogoLucalpel" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse  className="justify-content-end"isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem >
              <Link to="/">
                 <button className={styles.buttonNavbar}>INÍCIO</button>
                 </Link>
              </NavItem>
              <NavItem >
              <Link to="/empresa">
                 <button className={styles.buttonNavbar}>EMPRESA</button>
                 </Link>
              </NavItem>
              <NavItem >
              <Link to="/produtos">
                 <button className={styles.buttonNavbar}>PRODUTOS</button>
                 </Link>
              </NavItem>
              <NavItem >
              <Link to="/contatos">
                 <button className={styles.buttonNavbar}>CONTATO</button>
                 </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  export default Header

