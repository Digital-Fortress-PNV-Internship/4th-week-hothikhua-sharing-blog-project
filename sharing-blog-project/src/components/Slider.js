import React from 'react';

function Slider(props) {
    return (
        <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1>
                    {/* {props.data ? props.data.title : 'Loading'} */}
                    Hello everyone
                    <span></span>
                  </h1>
                  <p>Ready to listen to your stories</p>
                  {/* <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
                  <a
                    href='#features'
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