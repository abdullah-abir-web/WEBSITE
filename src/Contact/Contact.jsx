import React from 'react'
import './Contact.css'
import main_icon from '../assets/mail_icon.svg'
import location_icon  from '../assets/location_icon.svg'
import call_icon  from '../assets/call_icon.svg'
const Contact = () => {
  return (
    <div className='contact'>
    <div className="contact-title">
        <h1>Get in touch</h1>
    </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={main_icon} alt="mail_icon" /><p>abdullahabirweb10@gmail.com</p>
                </div>
                <div className="contact-detail">
                 <img src={call_icon} alt="call_icon" /> <p>01781204563</p>
                </div>
                <div className="contact-detail">
                  <img src={location_icon} alt="location_icon" /> <p>Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' ></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
    </div>
    </div>
  )
}

export default Contact