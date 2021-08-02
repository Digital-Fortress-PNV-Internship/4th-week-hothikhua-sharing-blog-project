import React, {useState, useEffect} from 'react';

const BlogDetail= ({page}) =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:4000/blog?id=1`)
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
                <div className="row">
                    {page}
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.author} 
                            </li>
                        ))}
                    </ul>
                    
                </div>
            );
        }
    }
    

export default BlogDetail;