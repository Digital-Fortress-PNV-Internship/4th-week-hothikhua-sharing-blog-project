import React from 'react';
import { Link } from 'react-router-dom';
import {Image} from 'react-bootstrap'
const Blog = ({blog}) =>{
   
    return (
        <>
            <div className='col-xs-12 col-md-4'>
                <div className="row">
                    <Image src={blog.img} width="90%" height="80%" />
                </div>
                <div className="row">
                    <div className="blog-text">
                        <h4>BY:{blog.author} - <i className="fa fa-calendar">{blog.date}</i> - <i className="fa fa-eye">30</i></h4>
                        <p>{blog.description}</p>
                       <Link to={`/blog/${blog.id}`}><button className="btn btn-info" >READ MORE</button></Link>
                    </div>
                </div>
             </div>
        </>
    );
}

export default Blog;