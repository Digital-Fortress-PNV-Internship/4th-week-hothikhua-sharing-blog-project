import React  from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Blog from '../../components/Blog';

const queryClient = new QueryClient()

const fetchBlog = async () => {
    const res = await fetch('http://localhost:4000/blog/');
    return res.json();
  }

const IndexBlog = () =>{
    
    const { data, status } = useQuery('blog', fetchBlog);
    console.log(data);
    return (
        <div id="blog">
            <h2><i className="fa fa-heart"></i> Our Stories</h2>
            <hr/>
            <div className='container'>
                <div className="row">
                    {status === 'loading' && (
                        <div>Loading data</div>
                    )}

                    {status === 'error' && (
                        <div>Error fetching data</div>
                    )}
                </div>
                {status === 'success' && (
                    <div className="row">
                    { data.map(blog => <Blog key={blog.id} blog={blog}/> ) }
                    </div>
                )} 
            </div>
        </div>
    );
}

export default function Wraped(){
    return(<QueryClientProvider client={queryClient} contextSharing={true}>
          <IndexBlog/>
      </QueryClientProvider>
    );
  }