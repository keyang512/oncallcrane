import React, { Component } from 'react'
import Link from 'gatsby-link'

import './contact.css'


class ContactPage extends Component {

  componentDidMount() {
    // new window.google.maps.Map(document.getElementById('google-maps'), {
    //   center: { lat: -34.397, lng: 150.644 },
    //   zoom: 8
    // });
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{paddingLeft: 10, paddingRight: 10, paddingTop: 10}}> 
          <div className="col-lg-12 col-md-12 col-sm-12 bg-danger" style={{ minHeight: 80, paddingTop: 10, paddingLeft: 10, marginBottom: 10, marginLelf: 10}}>
            <h3 className="text-white">Contact Us</h3>
            <p className="text-white">24 Hours Available</p>
          </div>
        </div>
        <div className="row">
          <div id="google-maps" className="google-maps col-lg-10 col-md-9 col-sm-12">

          <iframe
  frameBorder="0" style={{border: 0, width: '100%', minHeight: 500}}
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA24TlgNMqJi8qdvro42jfcuJ3aUPeuU1U
    &zoom=16&q=6+Alfred+St,+Onehunga,+Auckland" allowFullScreen>
</iframe>

          </div>
          <div className="contacts col-lg-2 col-md-3 col-sm-12">
            <div>
              Mike
             </div>
            <div>
              Mary
             </div>
            <div>
              Paul
             </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ContactPage
