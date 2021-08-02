import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const BlogDetail= ({page}) =>{
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
                <div className="row" id="blogdetail">     
                    <hr/>   
                    <div className="detail">
                        {items.map(item => (
                            <>
                            <h2>DETAIL ABOUT: {item.title}</h2>
                            <div className="row" key={item.id}>
                                <div className="col-xs-12 col-md-6">
                                    <div>
                                        <img src={item.img} width="80%"/>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <h3>BY: {item.author}</h3>
                                    <h3><i class="fa fa-calendar"> {item.date}</i></h3>
                                    <h4>Category: {item.category}</h4>
                                   
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
            );
        }
    }
    

export default BlogDetail;