import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
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
                
                <img src="images/Khua_Blog_Logo.png" style={{ height: '120px',  marginLeft: '20px' }} />
                
                </div>

                <div
                className='collapse navbar-collapse'
                id='bs-example-navbar-collapse-1'
                >
                <ul className='nav navbar-nav navbar-right'>
                    <li>
                        <Link className='page-scroll' to="/">Home</Link>
                    {/* <a href='#home' className='page-scroll'>
                        
                    </a> */}
                    </li>
                    <li>
                        <Link className='page-scroll' to="/about">About</Link>
                    {/* <a href='#about' className='page-scroll'>
                        About
                    </a> */}
                    </li>
                    <li>
                    <a href='#blog' className='page-scroll'>
                        Blog
                    </a>
                    </li>
                    <li>
                    <a href='#contact' className='page-scroll'>
                        Contact
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