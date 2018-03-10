import React, { Component } from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'

import { slide as Menu } from 'react-burger-menu'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'
import './index.css'

class Header extends Component {

  render() {
    return (
      <div id="nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <a className="navbar-brand" href="#">
            <span className="text-white">OnCallCranes</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexDirection: 'row-reverse', paddingRight: '1rem' }}>
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <span className="text-white hvr-underline-from-left" style={{paddingBottom: '1px'}}>Home </span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <span className="text-white hvr-underline-from-left" style={{paddingBottom: '1px'}}>Services </span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <span className="text-white hvr-underline-from-left" style={{paddingBottom: '1px'}}>Cranes </span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <span className="text-white hvr-underline-from-left" style={{paddingBottom: '1px'}}>Safety </span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <span className="text-white hvr-underline-from-left" style={{paddingBottom: '1px'}}>Gallery </span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/contact">
                  <span className="text-white hvr-underline-from-left">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
