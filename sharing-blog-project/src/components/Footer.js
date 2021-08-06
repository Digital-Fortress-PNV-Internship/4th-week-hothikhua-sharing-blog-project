import React from 'react';
import {Image} from 'react-bootstrap'
function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className='col-xs-12 col-md-4'>                   
                            <Image src="images/Khua_Blog_Logo2.png" width="100%"/>
                    </div>
                    <div className='col-xs-12 col-md-4'>   
                            <h4>Blog Type</h4>
                        <div className="row">
                            <div className='col-xs-12 col-md-6'>
                                <h5>Autobiographic</h5>
                                <h5>Traveling</h5>
                                <h5>Experience</h5>
                            </div>
                            <div className='col-xs-12 col-md-6'>
                                <h5>Sport</h5>
                                <h5>Activities</h5>
                                <h5>Sharing</h5>
                            </div>
                        </div> 
                    </div>
                    <div className='col-xs-12 col-md-4'>
                        <h4>Contact</h4>
                        <h5>Facebook: Khưa Nhí</h5>
                        <h5>Gmail: hokhua3@gmail.com</h5>
                        <h5>Address: 101B Le Huu Trac, Phuoc My, Da Nang</h5>      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;