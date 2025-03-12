import React, { useContext, useRef } from 'react';
import '../assets/css/SignUp.scss';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import ApiContext from '../context/ApiContext';
import Swal from 'sweetalert2';

const Login = () => {
  const [cookies, setCookie] = useCookies(['cookie-e']);
  const passRef = useRef();
  const emailRef = useRef();
  const [endPoint, header] = useContext(ApiContext);

  const formSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    console.log("Sending data:", loginData); 

    axios
      .post(`${endPoint}/login`, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setCookie("cookie-e", res.data);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Invalid email or password", "error");
      });
  };

  return (
    <div className="signup-page" data-aos="fade-down">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="signup-text">
              <form onSubmit={formSubmit}>
                <h3>Welcome Back</h3>
                <div className="mail-input">
                  <p>Email</p>
                  <input ref={emailRef} type="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="pass-input">
                  <p>Password</p>
                  <input ref={passRef} type="password" name="password" placeholder="Enter your password" />
                </div>
                <button className="signup-button">Sign In</button>

                <div className="or">
                  <div className="line-left"></div>
                  <p>or</p>
                  <div className="line-right"></div>
                </div>

                <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="signup-img">
              <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/newsletter-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;