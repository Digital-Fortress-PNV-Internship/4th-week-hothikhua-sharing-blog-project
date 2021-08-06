import React from 'react';
import Slider from '../../components/Slider';
import About from '../about/index'
import IndexBlog from '../blog/index'

function index() {
    return (
        <>
            <Slider/>
            <About/>
            <IndexBlog/>
        </>
    );
}

export default index;