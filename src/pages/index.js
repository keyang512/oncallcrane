import React from 'react'
import Link from 'gatsby-link'

import carousel1 from './images/carousel-1.jpg'
import carousel2 from './images/carousel-1.jpg'
import carousel3 from './images/carousel-1.jpg'

console.log(carousel1)

const IndexPage = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={carousel1} alt="First slide"  style={{maxHeight: 450}}/>
              <div className="carousel-caption d-none d-md-block" style={{right: '45% !important'}}>
                <h5 className="bg-danger" style={{display: 'inline', paddingLeft: '1rem', paddingRight: '1rem', opacity: 0.9}}>The Company You can Trust</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={carousel2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={carousel3} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
