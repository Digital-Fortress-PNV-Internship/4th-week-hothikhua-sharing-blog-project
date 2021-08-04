import React from 'react';
import { Link } from 'react-router-dom';
const Blog = ({blog, setPage}) =>{
   
    return (
        <>
            <div className='col-xs-12 col-md-4'>
                <div className="row">
                    <img src={blog.img} width="90%" height="80%" />
                </div>
                <div className="row">
                    <div className="blog-text">
                        <h3></h3>
                        <h4>BY:{blog.author} - <i class="fa fa-calendar">{blog.date}</i> - <i class="fa fa-eye">30</i></h4>
                        <p>{blog.description}</p>
                       <Link to={`/blog/${blog.id}`}><button class="btn btn-info" >READ MORE</button></Link>
                    </div>
                </div>
             </div>
        </>
    );
}

export default Blog;