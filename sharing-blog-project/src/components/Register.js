import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import {register} from '../redux/actions/auth';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

  const vfname = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The first name must be between 3 and 20 characters.
        </div>
      );
    }
  };

  const vlname = (value) => {
    if (value.length < 1 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The last name must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

const Register = () => {

    const form = useRef();
    const checkBtn = useRef();
  
    const [fname, setFirstname] = useState("");
    const [lname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
  
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
  
    const onChangeFirstname = (e) => {
        const fname = e.target.value;
        setFirstname(fname);
      };

    const onChangeLastname = (e) => {
        const lname = e.target.value;
        setLastname(lname);
    };

    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleRegister = (e) => {
      e.preventDefault();
  
      setSuccessful(false);
  
      form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        dispatch(register(fname, lname, username, email, password))
          .then(() => {
            setSuccessful(true);
          })
          .catch(() => {
            setSuccessful(false);
          });
      }
    };
  
    return (
      <div className="col-md-12" id="register">
        <div className="card card-container">
  
          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div>
                   <div className="form-group">
                  <label htmlFor="firstname">First name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="fname"
                    value={fname}
                    onChange={onChangeFirstname}
                    validations={[required, vfname]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">Last name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="lname"
                    value={lname}
                    onChange={onChangeLastname}
                    validations={[required, vlname]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
  
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
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
        </div>
      </div>
    );

};

export default Register;