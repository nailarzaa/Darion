import React, { useContext, useEffect, useRef, useState } from 'react';
import '../assets/css/SignUp.scss';
import Aos from 'aos';
import { Link, useNavigate } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Register = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    const nameRef = useRef();
    const mailRef = useRef();
    const passRef = useRef();
    const confirmPassRef = useRef();
    const [endPoint, header] = useContext(ApiContext);
    const navigate = useNavigate()

    const formSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!mailRef.current.value || !passRef.current.value) {
            Swal.fire({
                title: 'Please fill in all inputs!',
                icon: 'warning'
            });
            setLoading(false);
        } else {
            if (passRef.current.value === confirmPassRef.current.value) {
                axios.post("http://localhost:3007/api/register", {
                    userName: nameRef.current.value,
                    email: mailRef.current.value,
                    password: passRef.current.value
                }, header)
                    .then((res) => {
                        setLoading(false);
                        if (res.status === 200 || res.status === 201) {
                            Swal.fire({
                                title: "You are registered successfully!",
                                icon: 'success'
                            });
                            navigate('/login')
                        } else {
                            Swal.fire({
                                title: "Something went wrong!",
                                icon: "error"
                            });
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        Swal.fire({
                            title: `${error.response?.data || "An error occurred"}`,
                            icon: 'error'
                        });
                    });
            } else {
                setLoading(false);
                Swal.fire({
                    title: 'Passwords do not match!',
                    icon: 'error'
                });
            }
        }
    };

    return (
        <div className="signup-page" data-aos="fade-down">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="signup-text">
                            <form onSubmit={formSubmit}>
                                <h3>Get Started Now</h3>
                                <div className="name-input">
                                    <p>Name</p>
                                    <input ref={nameRef} type="text" name="name" placeholder="Enter your name" />
                                </div>
                                <div className="mail-input">
                                    <p>Email</p>
                                    <input ref={mailRef} type="email" name="mail" placeholder="Enter your email" />
                                </div>
                                <div className="pass-input">
                                    <p>Password</p>
                                    <input ref={passRef} type="password" name="password" placeholder="Enter your password" />
                                </div>
                                <div className="pass-input">
                                    <p>Password again</p>
                                    <input ref={confirmPassRef} type="password" name="password" placeholder="Enter your password" />
                                </div>
                                <div className="check d-flex">
                                    <input type="checkbox" name="" id="" />
                                    <p className="mx-2">I agree to the terms & policy</p>
                                </div>
                                <button className="signup-button" disabled={loading}>
                                    {loading ? <ClipLoader size={20} color={"#fff"} /> : "Sign Up"}
                                </button>
                                <div className="or">
                                    <div className="line-left"></div>
                                    <p>or</p>
                                    <div className="line-right"></div>
                                </div>
                                <p>Have an account? <Link to="/login">Sign in</Link></p>
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

export default Register;