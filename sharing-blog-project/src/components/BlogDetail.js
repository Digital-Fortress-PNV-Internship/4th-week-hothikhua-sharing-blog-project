import React, { useState, useEffect} from "react";
import {  useSelector } from "react-redux";
import {Image} from 'react-bootstrap'
import axios from "axios";
import { useParams } from "react-router";

const BlogDetail = () => {
  const { id } = useParams();
  //like
  const [like, setLike] = useState(0);
  // const handleLike = () => setLike(like + 1);
  const handleLike = () => {
    setLike(like + 1);
  };
  //comment
  const { user: currentUser } = useSelector((state) => state.auth);

  const [blog_id] = useState(id);
  const [username] = useState(currentUser.username);
  const [content, setContent] = useState("");
//   const [datetime, setDatetime] = useState("");
  const [numComment, setNumComment] = useState(0);

  const onChangeContent = (e) => {
    const content = e.target.value;
    setContent(content);
  };
  
  const handleComment = async (e) => {
    e.preventDefault();
    var today = new Date(),
      datetime =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    const comment = { blog_id, username, content, datetime };
    await axios.post("http://localhost:4000/comments", comment);
    setContent("");
    alert("You had comment successful!");
    getComment();
    setNumComment(numComment + 1);
  };

  const getComment = () =>{
fetch(`http://localhost:4000/comments?blog_id=${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCommentItem(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }
  //get data follow id
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  //get comments
  const [itemComment, setCommentItem] = useState([]);
  //fetch blog
  useEffect(() => {
     
    fetch(`http://localhost:4000/blog?id=${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    //fetch comments data
    
  }, [id]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="container">
        <div className="row" id="blogdetail">
          <div className="detail">
            {items.map((item) => (
              <>
                <h2> {item.title}</h2>
                <div className="row" key={item.id}>
                  <div className="col-xs-12 col-md-6">
                    <div>
                      <Image src={"/" + item.img} width="90%" height="80%" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <h3>BY: {item.author}</h3>
                    <h3>
                      <i className="fa fa-calendar"> {item.date}</i>
                    </h3>
                    <h4>Type: {item.category}</h4>
                    <h5>
                      <button onClick={handleLike}>
                        <i className="fa fa-thumbs-o-up"> Like {like}</i>
                      </button>
                      <button>
                        <i className="fa fa-comments-o"> Comment {numComment}</i>
                      </button>
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <br />
                  <p>{item.content}</p>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="row" id="comments">
          <h2>All comment</h2>
          {itemComment.map((item) => (
            <>
              <h4>
                {item.username} - Date: {item.datetime}
              </h4>
              <p>{item.content}</p>
              <hr />
            </>
          ))}
          <p>Write comment here</p>
          <form onSubmit={handleComment}>
            <div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="content"
                  value={content}
                  onChange={onChangeContent}
                  placehoder="Type your comment"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default BlogDetail;
