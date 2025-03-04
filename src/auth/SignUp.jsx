import React, { useEffect } from 'react'
import '../assets/css/SignUp.scss'
import Aos from 'aos';

const SignUp = () => {
    useEffect(() => {
      Aos.init({ duration: 1000, once: true });
    }, []);

    
    return (
        <>
            <div className="signup-page " data-aos="fade-down">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="signup-text">
                                <form >
                                    <h3>Get Started Now</h3>
                                    <div className="name-input">
                                        <p>Name</p>
                                        <input type="text" name="name" placeholder='Enter your name' />
                                        </div>

                                        <div className="mail-input">
                                        <p>Email</p>
                                        <input type="mail" name="mail" placeholder='Enter your email' />
                                        </div>

                                        <div className="pass-input">
                                        <p>Password</p>
                                        <input type="password" name="password" placeholder='Enter your password' />
                                        </div>

                                        <div className="check d-flex">
                                            <input type="checkbox" name="" id="" /><p className='mx-2'>I agree to the terms & policy</p>
                                        </div>
                                             <button className='signup-button'>Sign Up</button>

                                        <div className="or">
                                            <div className="line-left"></div>
                                            <p>or</p>
                                            <div className="line-right"></div>

                                        </div>

                                        <p> Have an account? Sign In</p>
                                   


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
        </>
    )
}

export default SignUp