import React from 'react';

function Slider() {
    return (
        <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1>
                    Hello everyone
                    <span></span>
                  </h1>
                  <p>Ready to listen to your stories</p>
                  <a
                    href='#blog'
                    className='btn btn-warning btn-lg page-scroll'
                  >
                   SHARING BLOG
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Slider;