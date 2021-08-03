import React from 'react';

function Footer(props) {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className='col-xs-12 col-md-4'>                   
                            <img src="images/Khua_Blog_Logo2.png" width="100%"/>
                            <h5>Address: 101B Le Huu Trac, Phuoc My, Da Nang</h5>      
                    </div>
                    <div className='col-xs-12 col-md-4'>   
                            <h4>Blog Type</h4>
                        <div className="row">
                            <div className='col-xs-12 col-md-6'>
                                <p>Tự sự</p>
                                <p>Traveling</p>
                                <p>Experience</p>
                            </div>
                            <div className='col-xs-12 col-md-6'>
                                <p>Tự sự</p>
                                <p>Traveling</p>
                                <p>Experience</p>
                            </div>
                        </div> 
                    </div>
                    <div className='col-xs-12 col-md-4'>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;