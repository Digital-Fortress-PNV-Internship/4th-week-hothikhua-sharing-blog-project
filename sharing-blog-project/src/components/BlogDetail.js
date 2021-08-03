import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const BlogDetail= () =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // let id = page;
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/blog?id=${id}`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])
    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading</div>
    }
    else {

            return (
                <div className="container">
                <div className="row" id="blogdetail">     
                    <div className="detail">
                        {items.map(item => (
                            <>
                            <h2> {item.title}</h2>
                            <div className="row" key={item.id}>
                                <div className="col-xs-12 col-md-6">
                                    <div>
                                        <img src={"/"+ item.img} width="90%" height="80%" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <h3>BY: {item.author}</h3>
                                    <h3><i class="fa fa-calendar"> {item.date}</i></h3>
                                    <h4>Type: {item.category}</h4>
                                    <h5><a><i class="fa fa-thumbs-o-up"> Like</i></a>  <a><i class="fa fa-comments-o"> Comment</i></a></h5>
                                </div>
                            </div>
                            <div className="row">
                                <br/>
                                <p>{item.content}</p>
                            </div>
                           </>
                            
                        ))}
                    </div>
                    
                </div>
            </div>
            );
        }
    }
    

export default BlogDetail;