import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux"
import CheckButton from "react-validation/build/button";
import { useParams } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import {comments} from "../redux/actions/comment";

const required = (value) =>{
    if(!value){
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
};

const BlogDetail= () =>{
    //comment
    const [show, setShow] = useState(false);

    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);

    const form = useRef();
    const checkBtn = useRef();

    const [blog_id, setBlogid] = useState("");
    const [author_id, setAuthorid] = useState("");
    const [content, setContent] = useState("");
    const [datetime, setDatetime] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

  const onChangeBlogId = (e) => {
    const blog_id = e.target.value;
    setBlogid(blog_id);
  };
  const onChangeAuthorId = (e) => {
    const author_id = e.target.value;
    setAuthorid(author_id);
  };
  const onChangeContent = (e) => {
    const content = e.target.value;
    setContent(content);
  };
  const onChangeDatetime = (e) => {
    const datetime = e.target.value;
    setDatetime(datetime);
  };

  const handleComment = (e) => {
      e.preventDefault();

      setSuccessful(false);

      form.current.validateAll();

      if(checkBtn.current.context._errors.length === 0){
          dispatch(comments(blog_id, author_id, content, datetime))
          .then(()=>{
              setSuccessful(true);
          })
          .catch(()=>{
              setSuccessful(false);
          });
      }
  };
    //get data follow id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
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
                                    <h5><a><i class="fa fa-thumbs-o-up"> Like</i></a>  <a onClick={handleShow}><i class="fa fa-comments-o"> Comment</i></a></h5>
                                </div>
                            </div>
                            <div className="row">
                                <br/>
                                <p>{item.content}</p>
                            </div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header>
                                    <Modal.Title>Your comment</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleComment} ref={form}>
                                        {!successful && (
                                            <div>
                                                <div className="form-group">
                                                    <label htmlFor="blog_id">Blog _ID</label>
                                                    <Input
                                                        type="number"
                                                        className="form-control"
                                                        name="blog_id"
                                                        value={blog_id}
                                                        onChange={onChangeBlogId}
                                                        validations={[required]}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="author_id">Author_ID</label>
                                                    <Input
                                                        type="number"
                                                        className="form-control"
                                                        name="author_id"
                                                        value={author_id}
                                                        onChange={onChangeAuthorId}
                                                        validations={[required]}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="content">Content</label>
                                                    <textarea
                                                        className="form-control"
                                                        name="content"
                                                        value={content}
                                                        onChange={onChangeContent}
                                                        validations={[required]}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="datetime">Datetime</label>
                                                    <Input
                                                        type="datetime"
                                                        className="form-control"
                                                        name="datetime"
                                                        value={datetime}
                                                        onChange={onChangeDatetime}
                                                        validations={[required]}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn-primary btn-block">Post</button>
                                                </div>
                                            </div>
                                        )}
                                        {message && (
                                        <div className="form-group">
                                        <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                                            {message}
                                        </div>
                                        </div>
                                    )}
                                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Post
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                           </>
                            
                        ))}
                    </div>
                    
                </div>
                <div className="row" id="comments">
                    <h2>All comment</h2>
                    
                </div>
            </div>
            );
        }
    }
    

export default BlogDetail;