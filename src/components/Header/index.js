import React, { Component } from 'react'
import Link from 'gatsby-link'
import $ from 'jquery'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'
import './index.css'
import craneIcon from './crane-50.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="header">
        <Navbar color="faded" light expand="md" className="fixed-top" style={{ zIndex: 1000, minHeight: '100px' }}>
          <h1>
            <a className="navbar-brand" href="#">
              <img style={{ marginRight: '0.5rem' }} src={craneIcon} />
              <span className="text-white" style={{ letterSpacing: '0.15rem' }}>OnCallCranes</span>
            </a>
          </h1>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar className="bg-theme">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <span className="text-white hvr-underline-from-left" style={{ paddingBottom: '1px' }}>Home </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => {
                  $('html, body').animate(
                    {
                      scrollTop: $("#cranes").offset().top

                    },
                    2000
                  );
                  this.setState({ isOpen: false })
                }
                } className="nav-link">
                  <span className="text-white hvr-underline-from-left" style={{ paddingBottom: '1px' }}>Gallery </span>
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink onClick={() => {
                  $('html, body').animate(
                    {
                      scrollTop: $("#contact-us").offset().top

                    },
                    2000
                  );
                  this.setState({ isOpen: false })
                }
                } className="nav-link">
                  <span className="text-white hvr-underline-from-left">Contact Us</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
