import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';



function NavBar(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
    <Nav tabs>
      <NavItem>
        <NavLink href="#" active>
          Welcome!
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Hello User!
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Chauncey's Life</DropdownItem>
          <DropdownItem>Car</DropdownItem>
          <DropdownItem divider />
          <DropdownItem >Home</DropdownItem> 
          <DropdownItem divider />
          <DropdownItem>Food</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Anime</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="#">Make a Chance</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="http://google.com" target='blank' rel='noopener noreferrer'>Google It!</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
    </div>
  );
}

export default NavBar;