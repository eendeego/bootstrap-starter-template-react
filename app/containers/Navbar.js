import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from  'react-bootstrap';
import { RouteHandler } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar brand='Project name' className="navbar navbar-inverse navbar-fixed-top">
        <Nav>
          <LinkContainer to="/" active={location.pathname === '/'}><NavItem>Home</NavItem></LinkContainer>
          <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
          <LinkContainer to="/contact"><NavItem>Contact</NavItem></LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
