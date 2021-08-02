import React from 'react';
// import { Container,Button, Row, Col} from 'react-bootstrap';
function index(props) {
    return (
        <div id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              {' '}
              <img src='images/about.jpg' className='img-responsive' alt='' />{' '}
            </div>
            <div className='col-xs-12 col-md-6'>
              <div className='about-text'>
                <h2>About Us</h2>
                <h4>We'll be open to stories that you want to share.</h4>
                <h3>Why should you choose us as the place to send your stories?</h3>
                <h4>Our website is a convergence of good and popular blogs. Your story will be known by many people. From there you can also find a companion to your story.</h4>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default index;

