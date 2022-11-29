import React from 'react'
import "./contact.css";
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  // const showToastMessage = () => {
  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_87nbq3s",
        "template_hn3leg3",
        form.current,
        "8w4CcdnZrmFGrkyJc"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast(
            "Thanks for contact with me. Let me back to you within short time",
            {
              position: toast.POSITION.BOTTOM_RIGHT
            }
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="conatact__option-icon" />
            <h4>Email</h4>
            <h5>smy329@gmail.com</h5>
            <a href="mailto:smy329@gmail.com"> Send a Mail</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="conatact__option-icon" />
            <h4>Messenger</h4>
            <h5>Syed Mohammad Yasir</h5>
            <a href="https://m.me/cyasir"> Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="conatact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+8801833051312</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801833051312">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name" //this name field will be used in EmailJS
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="email" //this name field will be used in EmailJS
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message" //this name field will be used in EmailJS
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
            <ToastContainer />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact