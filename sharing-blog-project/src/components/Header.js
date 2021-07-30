import React from 'react';

function Header(props) {
    return (
        <div>
            <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                <button
                    type='button'
                    className='navbar-toggle collapsed'
                    data-toggle='collapse'
                    data-target='#bs-example-navbar-collapse-1'
                >
                    {' '}
                    <span className='sr-only'>Toggle navigation</span>{' '}
                    <span className='icon-bar'></span>{' '}
                    <span className='icon-bar'></span>{' '}
                    <span className='icon-bar'></span>{' '}
                </button>
                
                <img src="images/blog_logo.png" style={{ height: '60px', marginTop: '10px', marginBottom: '10px', marginLeft: '20px' }} />
                
                </div>

                <div
                className='collapse navbar-collapse'
                id='bs-example-navbar-collapse-1'
                >
                <ul className='nav navbar-nav navbar-right'>
                    <li>
                    <a href='#features' className='page-scroll'>
                        Home
                    </a>
                    </li>
                    <li>
                    <a href='#about' className='page-scroll'>
                        About
                    </a>
                    </li>
                    <li>
                    <a href='#services' className='page-scroll'>
                        Service
                    </a>
                    </li>
                    <li>
                    <a href='#portfolio' className='page-scroll'>
                        Post
                    </a>
                    </li>
                    <li>
                    <a href='#testimonials' className='page-scroll'>
                        Activities
                    </a>
                    </li>
                    <li>
                    <a href='#team' className='page-scroll'>
                        Contact
                    </a>
                    </li>
                    <li>
                    <a href='#contact' className='page-scroll'>
                        Team
                    </a>
                    </li>
                    
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Header;