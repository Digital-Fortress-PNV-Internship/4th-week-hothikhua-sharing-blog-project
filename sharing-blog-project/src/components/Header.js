import React from 'react';
import { Link } from "react-router-dom";
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
                
                <img src="images/Khua_Blog_Logo2.png" style={{ height: '80px',  marginLeft: '20px' }} />
                
                </div>

                <div
                className='collapse navbar-collapse'
                id='bs-example-navbar-collapse-1'
                >
                <ul className='nav navbar-nav navbar-right'>
                    <li>
                        <Link  to="/">Home</Link>
                    </li>
                    <li>
                    <a href='#about' className='page-scroll'>
                        About
                    </a>
                    </li>
                    <li>
                    <a href='#blog' className='page-scroll'>
                        Blog
                    </a>
                    </li>
                    <li>
                        <Link  to="/contact">Contact</Link>
                    </li>  
                    <li>
                        <Link  to="/register">Register</Link>
                    </li>    
                    <li>
                        <Link  to="/login">Login</Link>
                    </li>        
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Header;