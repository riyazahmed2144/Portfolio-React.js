import React from 'react'
import './contact.css'
import Swal from 'sweetalert2'
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const contact = () => {
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b4604390-cafa-4588-9b6a-18d19f3357e4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
      title: "Success!",
      text: "Message Sent Successfully!",
      icon: "success"
});
    }
  };

  return (
    <section className='contact'>
      <form onSubmit={onSubmit}>
        <h2>Contact Me</h2>
        <div className="box">
        <div className="input-box">
          <label>Full Name:</label>
          <input type="text" className='field' placeholder='Enter Your Name' name='name' required/>
        </div>
        <div className="input-box">
          <label>Email:</label>
          <input type="email" className='field' placeholder='Enter Your Email' name='email' required/>
        </div>
        <div className="input-box">
          <label>Message:</label>
          <textarea name="message" className='field mess' placeholder='Enter Your Message'></textarea>
        </div>
        <div className="submit">
          <button>submit</button>
        </div>
        <div className="icons">
         <a
      href="https://github.com/Riyaz2144"
      target="_blank"
      rel="noopener noreferrer"
      title="Visit my GitHub"
      style={{ fontSize: '44px', color: '#000' }} 
      onMouseEnter={(e) =>{
        e.currentTarget.style.color = '#374151';
      }}
      onMouseLeave={(e) =>{
        e.currentTarget.style.color = '#000';
      }}
    >
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/riyaz-ahmed-9b5108279/" 
      target="_blank"
      rel="noopener noreferrer"
      title="Visit my LinkedIn"
      style={{ fontSize: '44px', color: '#0a66c2',
      }}
      onMouseEnter={(e) =>{
        e.currentTarget.style.color = '#004182';
      }}
      onMouseLeave={(e) =>{
        e.currentTarget.style.color ='#0a66c2';
      }}
    >
      <FaLinkedin />
    </a>
        <a
      href="mailto:rariyazahmed2144@gmail.com"
      title="Email Me"
      style={{ color: '#4b5563', fontSize: '44px' }}
    onMouseEnter={(e) =>{
      e.currentTarget.style.color = '#2563eb';
    }}
    onMouseLeave={(e) =>{
      e.currentTarget.style.color = '#4b5563';
    }}
    >
      <FaEnvelope />
    </a>
    </div>
        </div>
      </form>
    </section>
  )
}
export default contact;