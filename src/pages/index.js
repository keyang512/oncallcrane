import React, { Component } from 'react'
import Link, { withPrefix } from 'gatsby-link'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Lightbox from 'react-image-lightbox';


import "./index.css"
import backgroundImage1 from './images/pexels-photo-532079.jpeg'

import threeTon5 from './images/3-ton/3-ton-5.jpg'
import threeTon1 from './images/3-ton/3-ton-1.jpg'
import threeTon2 from './images/3-ton/3-ton-2.jpg'
import threeTon3 from './images/3-ton/3-ton-3.jpg'
import threeTon4 from './images/3-ton/3-ton-4.jpg'
import threeTon6 from './images/3-ton/3-ton-6.jpg'
import threeTon7 from './images/3-ton/3-ton-7.jpg'
import threeTon8 from './images/3-ton/3-ton-8.jpg'

import fiveTon1 from './images/5-ton/5-ton-1.jpg'
import fiveTon2 from './images/5-ton/5-ton-2.jpg'
import fiveTon3 from './images/5-ton/5-ton-3.jpg'
import fiveTon4 from './images/5-ton/5-ton-4.jpg'
import fiveTon5 from './images/5-ton/5-ton-5.jpg'

import tenTon1 from './images/10-ton/10-ton-1.jpg'
import tenTon2 from './images/10-ton/10-ton-2.jpg'
import tenTon3 from './images/10-ton/10-ton-3.jpg'
import tenTon4 from './images/10-ton/10-ton-4.jpg'
import tenTon5 from './images/10-ton/10-ton-5.jpg'
import tenTon6 from './images/10-ton/10-ton-6.jpg'
import tenTon7 from './images/10-ton/10-ton-7.jpg'
import tenTon8 from './images/10-ton/10-ton-8.jpg'

import twelveTon1 from './images/12-ton/12-ton-1.jpg'
import twelveTon2 from './images/12-ton/12-ton-2.jpg'

import thirteenTon1 from './images/13-ton/13-ton-1.jpg'
import thirteenTon2 from './images/13-ton/13-ton-2.jpg'

import sixteenTon1 from './images/16-ton/16-ton-1.jpg'
import sixteenTon2 from './images/16-ton/16-ton-2.jpg'

import thirtyTon1 from './images/30-ton/30-ton-1.jpg'
import thirtyTon2 from './images/30-ton/30-ton-2.jpg'

import eightyTon1 from './images/80-ton/80-ton-1.jpg'
import eightyTon2 from './images/80-ton/80-ton-2.jpg'
import eightyTon3 from './images/80-ton/80-ton-3.jpg'
import eightyTon4 from './images/80-ton/80-ton-4.jpg'
import eightyTon5 from './images/80-ton/80-ton-5.jpg'
import eightyTon6 from './images/80-ton/80-ton-6.jpg'
import eightyTon7 from './images/80-ton/80-ton-7.jpg'
import eightyTon8 from './images/80-ton/80-ton-8.jpg'
import eightyTon9 from './images/80-ton/80-ton-9.jpg'
import eightyTon10 from './images/80-ton/80-ton-10.jpg'
import eightyTon11 from './images/80-ton/80-ton-11.jpg'


const imageAssets = {
  '3-ton': [
    threeTon1,
    threeTon2,
    threeTon3,
    threeTon4,
    threeTon5,
    threeTon6,
    threeTon7,
    threeTon8
  ],
  '5-ton': [
    fiveTon1,
    fiveTon2,
    fiveTon3,
    fiveTon4,
    fiveTon5,
  ],
  '10-ton': [
    tenTon1,
    tenTon2,
    tenTon3,
    tenTon4,
    tenTon5,
    tenTon6,
    tenTon7,
    tenTon8,
  ],
  '12-ton': [
    twelveTon1,
    twelveTon2,
  ],
  '13-ton': [
    thirteenTon1,
    thirteenTon2,
  ],
  '16-ton': [
    sixteenTon1,
    sixteenTon2,
  ],
  "30-ton": [
    thirtyTon1,
    thirtyTon2
  ],
  "80-ton": [
    eightyTon1,
    eightyTon2,
    eightyTon3,
    eightyTon4,
    eightyTon5,
    eightyTon6,
    eightyTon7,
    eightyTon8,
    eightyTon9,
    eightyTon10,
    eightyTon11,
  ]
}

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      isOpenLightbox: false,
      imageGalleryName: '3-ton',
      photoIndex: 0,
    }
  }

render() {
  const {isOpenLightbox, imageGalleryName, photoIndex} = this.state;
  const images = imageAssets[imageGalleryName];


return (
  <div>
    <section id="intro" className="bg-danger" style={{ backgroundColor: 'red', position: 'relative', display: 'flex', padding: '2rem' }}>
      <div>
        <h1 className="text-white">Call Us Now</h1>
        <a href="tel:09-636 7589" className="no-underline hvr-pulse-grow">
          <h3 className="text-white"><i className="fas fa-phone fa-1x" style={{ color: 'white', marginRight: '0.5rem' }} title="Chat On Facebook" ></i>09-636 7589</h3>
        </a>

        <div className="text-white " style={{ cursor: 'pointer', marginTop: '1rem' }} onClick={() => window.open('https://www.facebook.com/On-Call-Cranes-111932076165429/')}>
          <h3 className="hvr-pulse-grow"><i className="fab fa-facebook-square fa-1x" style={{ color: 'white', marginRight: '1rem' }} title="Chat On Facebook" ></i>FOLLOW US</h3>
        </div>
      </div>
      <div>


      </div>
    </section>

    <section id="who-we-are" className="bg-white" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignSelf: 'center', margin: 'auto', flexDirection: 'column', padding: '1rem' }}>
      <h1 className="text-white">Who we are</h1>
      <span className="text-white">
        The Oncall Cranes (Inc.) was established in 1975 by . Today we provide cranes.
      </span>
    </section>
    <section id="cranes" className="bg-white" style={{ margin: 'auto', display: 'flex', justifyContent: 'center', paddingTop: '1rem', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 className="text-danger">Cranes</h1>
      </div>
      <div className="container-fluid">
        <div className="row" >
          <div className="col-sm-6 col-md-4" style={{paddingBottom: '1rem'}}>
            <Card className="crane-card" onClick={() => this.setState({isOpenLightbox: true, imageGalleryName: '3-ton'})}>
              <CardImg top width="100%" src={threeTon5} alt="Card image cap" />
              <CardBody style={{marginBottom: 0}}>
                <CardTitle style={{textAlign: 'center'}}>3 Ton Spider Crane</CardTitle>
              </CardBody>
            </Card>
          </div>
        
          <div className="col-sm-6 col-md-4">
            <Card className="crane-card" onClick={() => this.setState({isOpenLightbox: true, imageGalleryName: '30-ton'})}>
              <CardImg top width="100%" src={thirtyTon1} alt="Card image cap" />
              <CardBody>
                <CardTitle style={{textAlign: 'center'}}>30 Ton</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-6 col-md-4">
            <Card className="crane-card" onClick={() => this.setState({isOpenLightbox: true, imageGalleryName: '80-ton'})}>
              <CardImg top width="100%" src={eightyTon1} alt="Card image cap" />
              <CardBody>
                <CardTitle style={{textAlign: 'center'}}>80 Ton</CardTitle>
              </CardBody>
            </Card>
          </div>
       
          <div className="col-sm-6 col-md-4" style={{paddingBottom: '1rem'}}>
            <Card className="crane-card" onClick={() => this.setState({isOpenLightbox: true, imageGalleryName: '12-ton'})}>
              <CardImg top width="100%" src={twelveTon1} alt="Card image cap" />
              <CardBody style={{marginBottom: 0}}>
                <CardTitle style={{textAlign: 'center'}}>12 Ton</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-6 col-md-4" style={{paddingBottom: '1rem'}}>
            <Card className="crane-card" onClick={() => this.setState({isOpenLightbox: true, imageGalleryName: '13-ton'})}>
              <CardImg top width="100%" src={thirteenTon1} alt="Card image cap" />
              <CardBody style={{marginBottom: 0}}>
                <CardTitle style={{textAlign: 'center'}}>13 Ton</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-6 col-md-4" style={{paddingBottom: '1rem'}}>
            <Card className="crane-card" onClick={() => this.setState({isOpenLightbox: true, imageGalleryName: '16-ton'})}>
              <CardImg top width="100%" src={sixteenTon1} alt="Card image cap" />
              <CardBody style={{marginBottom: 0}}>
                <CardTitle style={{textAlign: 'center'}}>16 Ton</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-6 col-md-4" style={{paddingBottom: '1rem'}}>
            <Card className="crane-card" onClick={() => this.setState({isOpenLightbox: true, imageGalleryName: '5-ton'})}>
              <CardImg top width="100%" src={fiveTon2} alt="Card image cap" />
              <CardBody style={{marginBottom: 0}}>
                <CardTitle style={{textAlign: 'center'}}>5 Ton</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-6 col-md-4" style={{paddingBottom: '1rem'}}>
            <Card className="crane-card" onClick={() => this.setState({isOpenLightbox: true, imageGalleryName: '10-ton'})}>
              <CardImg top width="100%" src={tenTon1} alt="Card image cap" />
              <CardBody style={{marginBottom: 0}}>
                <CardTitle style={{textAlign: 'center'}}>10 Ton</CardTitle>
              </CardBody>
            </Card>
          </div>
    
        </div>
      </div>
    </section>
    <section id="contact-us">
      <div className="section-header">
      <h1 className="text-white">Contact Us</h1>
      </div>
      <div className="text-white" style={{margin: 'auto', marginBottom: '0.5rem'}}>
        <i className="fas fa-map-marker"></i><span style={{marginLeft: '1rem'}}>
        <a className="text-white no-underline hvr-pulse-grow"  href="http://maps.google.com/?q=6+Alfred+St,+Onehunga,+Aucklan">6 Alfred St, Onehunga, Auckland</a></span>
      </div>  
      <div className="text-white" style={{margin: 'auto', marginBottom: '0.5rem'}}>
        <i className="fas fa-phone"></i><span style={{marginLeft: '1rem'}}>
        <a  className="text-white no-underline hvr-pulse-grow"  href="tel:096367589">09-636 7589</a></span>
      </div> 
      <div className="text-white" style={{margin: 'auto', marginBottom: '0.5rem'}}>
        <i className="fas fa-fax"></i><span style={{marginLeft: '1rem'}}>
        <a  className="text-white no-underline hvr-pulse-grow"  href="fax:096367589">09 634 9327</a></span>
      </div> 
      <div className="text-white" style={{margin: 'auto', marginBottom: '0.5rem'}}>
        <i className="far fa-envelope"></i><span style={{marginLeft: '1rem'}}>
        <a  className="text-white no-underline hvr-pulse-grow" href="mailto:mary@oncallcranes.co.nz">mary@oncallcranes.co.nz</a>
        </span>
      </div>  

      <div style={{margin: 'auto', width: '90%', marginTop: '1rem'}}>

          <iframe
  frameBorder="0" style={{border: 0, width: '100%', minHeight: 500}}
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA24TlgNMqJi8qdvro42jfcuJ3aUPeuU1U
    &zoom=14&q=6+Alfred+St,+Onehunga,+Auckland" allowFullScreen>
</iframe>
      </div>   

       {isOpenLightbox && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpenLightbox: false, photoIndex: 0 })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
    

    </section>
  </div>)
 }

}


export default IndexPage
