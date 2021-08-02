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
                <p>We often receive the story that you want to share</p>
                {/* <p>{props.data ? props.data.paragraph : 'loading...'}</p> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default index;

