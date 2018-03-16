import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
import 'hover.css/css/hover.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'popper.js'

class TemplateWrapper extends Component {
  componentDidMount() {


    $(document).scroll(() => {
      let y = $(document).scrollTop();
      if (y > 100) {
        $('.back-to-top').addClass('active');
        // $('nav').addClass('fixed-top');
      } else {
        $('.back-to-top').removeClass('active');
        // $('nav').removeClass('fixed-top');

      }
    })



  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet
          title="On Call Cranes"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          script={[
            {
              src: "https://use.fontawesome.com/releases/v5.0.8/js/all.js"
            }
          ]}
          link={[
            {
              rel: "stylesheet",
              type: "text/css",
              href: "http://fonts.googleapis.com/css?family=Open+Sans"
            },
            {
              rel: "stylesheet",
              href: "https://use.fontawesome.com/releases/v5.0.8/css/all.css"
            }
          ]}

        />
        <Header />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBF45H80PwppRO7r-XGf6fmjDtcqAbIVpk" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        <div style={{marginTop: '100px'}}>
          {children()}
        </div>
        <Footer />

        <div id="back-to-top" className='back-to-top'>
          <a title="Back To Top" onClick={() => $('html, body').animate({ scrollTop: 0 }, 800)}>
            <i className="fas fa-angle-up fa-2x"></i>
          </a>
        </div>
      </div>
    )
  }
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
