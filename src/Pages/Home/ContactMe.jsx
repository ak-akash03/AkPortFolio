import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactMe() {
  const form = useRef();
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")


    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cmww1yd", "template_qarxnhs", form.current, {
        publicKey: "aI9Z9P9fxi1NGdopf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast("Message Send Successfully ")

          setEmail("")
          setLastName("")
          setFirstName("")
          setMessage("")
          setPhone("")


        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section id="Contact" className="contact--section">
        <div>
          <p className="skills--section--heading">Get In Touch</p>

        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact--form--container"
        >
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="firstName"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="lastName"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="from_email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="from_phone"
                id="phone-number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
          </div>

          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              placeholder="Type your message..."
            />
          </label>

          <div>
            <button className="btn btn-primary contact--form--btn">
              Send Message
            </button>
          </div>
        </form>
      </section>
      <ToastContainer></ToastContainer>
    </>
  );
}