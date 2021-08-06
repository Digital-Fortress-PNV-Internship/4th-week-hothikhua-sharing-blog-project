import React, {useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import {Image} from 'react-bootstrap'
const Header = ({logOut}) => {

    const { user: currentUser } = useSelector((state) => state.auth);

    let [page] = useState("null");

    if (!currentUser) {
        return <Redirect to="/login" />;
    }
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
                
                <Image src="images/Khua_Blog_Logo2.png" style={{ height: '80px',  marginLeft: '20px' }} />
                
                </div>

                <div
                className='collapse navbar-collapse'
                id='bs-example-navbar-collapse-1'
                >
                <ul className='nav navbar-nav navbar-right'>
                    <li>
                        <Link to="/">Home</Link>
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
                    { page !== "null" ?
                     <>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link  to="/login">Login</Link>
                        </li> 
                     </> 
                     : < > 
                            <li><i className="fa fa-user-circle-o"> {currentUser.username}</i></li>
                            <li>
                                <Link  to="/logout" onClick={logOut}>Logout</Link>
                            </li> 
                        </>        
                     }
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Header;