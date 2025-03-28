import React, { useRef, useState, useContext } from 'react';
import '../assets/css/SignUp.scss';
import Aos from 'aos';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import ApiContext from '../context/ApiContext';
import Swal from 'sweetalert2';

const Login = () => {
  const [cookies, setCookie] = useCookies(['cookie-e']);
  const passRef = useRef();
  const emailRef = useRef();
  const [endPoint, header] = useContext(ApiContext);
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const [inputType, setInputType] = useState('password');

  const formSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    try {
      if (loginData.email === "admin@mail.com" && loginData.password === "admin123") {
        // Admin Login
        localStorage.setItem("authToken", "your_jwt_token");
        localStorage.setItem("userRole", "admin");
        localStorage.setItem("username", "Admin");
        Swal.fire("Success", "Admin login successful!", "success");
        navigate("/dashboard/sliderdashboard");
      } else {
        // Regular User Login
        const res = await axios.post(`${endPoint}/login`, loginData, header);
        setCookie("cookie-e", res.data.token);
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("userRole", res.data.role);
        localStorage.setItem("username", res.data.username); // Assuming API returns username

        Swal.fire("Success", "Login successful, welcome!", "success");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Invalid email or password", "error");
    }
  };

  const passToggleShow = () => {
    setEye(!eye);
    setInputType(eye ? "text" : "password");
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
                  <input ref={emailRef} type="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="pass-input">
                  <p>Password</p>
                  <div className="pass-box">
                    <input ref={passRef} type={inputType} name="password" placeholder="Enter your password" required />
                    <button type="button" onClick={passToggleShow} className="btn btn-toggle-show">
                      {eye ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                    </button>
                  </div>
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
