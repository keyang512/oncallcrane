import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import FontAwesome from 'react-fontawesome'


import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
import 'hover.css/css/hover.css'
import $ from 'jquery';

class TemplateWrapper extends Component {
  componentDidMount() {
    $(document).scroll(() => {
      let y = $(document).scrollTop();
      console.log(y);
      if (y > 50) {
        $('.back-to-top').addClass('active');
        $('nav').addClass('fixed-top');
      } else {
        $('.back-to-top').removeClass('active');
        $('nav').removeClass('fixed-top');

      }
    })
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
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
              href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
            },
            {
              rel: "stylesheet",
              type: "text/css",
              href: "http://fonts.googleapis.com/css?family=Tangerine"
            }
          ]}
        />
        <Header />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBF45H80PwppRO7r-XGf6fmjDtcqAbIVpk" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        <div className="container-fluid">
          <div style={{
          }}>
            {children()}
          </div>
        </div>
        <Footer />

        <div id="back-to-top" className='back-to-top'>
          <a title="Back To Top" onClick={() => $(document).scrollTop(0)}>
            <FontAwesome
              className='super-crazy-colors'
              name='arrow-up'
              size='2x'
              style={{
                color: 'white'
              }}
            />
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
