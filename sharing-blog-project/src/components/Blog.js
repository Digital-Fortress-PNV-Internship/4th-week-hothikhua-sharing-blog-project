import React from 'react';

const Blog = ({blog, setPage}) =>{
   
    return (
        <>
            <div className='col-xs-12 col-md-4'>
                <div className="row">
                    <img src="images/blog2.jpg" width="90%" />
                </div>
                <div className="row">
                    <div className="blog-text">
                        <h3></h3>
                        <h4>BY:{blog.author} - <i class="fa fa-calendar">MAR 23, 2021</i> - <i class="fa fa-eye">30</i></h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...</p>
                        <button class="btn btn-info" onClick={() => setPage(blog.id)}>READ MORE</button>
                       
                    </div>
                </div>
             </div>
        </>
    );
}

export default Blog;