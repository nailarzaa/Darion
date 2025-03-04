import React, { useRef } from 'react'
import '../assets/css/Contact.scss'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser'
import Subscribe from './Subscribe';
import Navbar from './Navbar';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9qap69l', 'template_96525sg', formRef.current, {
        publicKey: 'Gygn441aXsbynVN15',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Success',
            icon: 'success'
          })
        },
        (error) => {
          Swal.fire({
            title: 'error',
            icon: 'error'
          })
        },
      );
  };
  return (
    <>

      <div className="contact-photo">
        <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/bg-breadcrumb.jpg" alt="" />
        <div className="contact-text">
          <p><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>/ <span>Contact Us</span></p>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="gradient-part">
        <div className="text-image mx-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="text">
                  <span>HOW TO FIND US</span>
                  <h1>HOURS & LOCATION</h1>
                  <p>72 Madison Avenue, New York, NY 10016</p>
                  <p>We are open for table service Everyday 11:00am – 9:00pm, as well as Saturday & Sunday 9:30am – 9:00pm. </p>
                  <p>Our store is open for Pick Up & Delivery Monday – Friday 11:00am – 9:00pm <br />
                    as well as Saturday & Sunday 10:00am – 9:00pm. <br />
                    DELIVERY available on Saturday & Sunday from 11:00am.</p>
                  <button className='mb-2'>GET DIRECTIONS</button>
                </div>

              </div>
              <div className="col-lg-6">
                <div className="image  ">
                  <img className=' mb-2' width={301} src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-4.jpg" alt="" />
                  <img className='mx-0' width={300} src="https://darion.wpbingosite.com/wp-content/uploads/2024/02/banner-6.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="container">
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4499478182306!2d49.84171320000001!3d40.3767193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6343917fff%3A0xae9045d8425faf97!2sMatrix%20academy!5e0!3m2!1saz!2saz!4v1740141074521!5m2!1saz!2saz" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>
      </div>

      <Subscribe />


   
    <div className="general-contact-info">
       <div className="contact-infos">
     <div className="containe">
        <h3>Contact Details</h3>
        <h1>We've been waiting for you</h1>
        <p>We want to hear from you. Let us know how we can help.</p>
     <div className="contact-details">
        <div className="inputs">
          <h4>Send us a Message</h4>
          <div className="name-input"><input type="text" placeholder='Enter your name' /></div>    
          <div className="mail-input"><input type="text" placeholder='Enter your email' /></div>    
          <div className="subject-input"><input type="text" placeholder='Enter your subject' /></div>    
          <textarea style={{width:'100%'}} className="message-input"></textarea>   
          <button onClick={sendEmail} className='submit'>Submit</button>
          
        </div>

      </div>
     </div>
     </div>
    </div>

    </>
  )
}

export default Contact