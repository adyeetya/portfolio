import React, { useRef, useState } from 'react'
import './contact.scss'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}
const Contact = () => {
  const form = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const templateKey = import.meta.env.VITE_EMAIL_JS_TEMPLATE
  const publicKey = import.meta.env.VITE_PUBLIC_KEY
  const serviceKey = import.meta.env.VITE_SERVICE_KEY

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(serviceKey, templateKey, form.current, publicKey).then(
      (result) => {
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
        }, 3000)
        console.log(result.text)
      },
      (error) => {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000)
        console.log(error.text)
      }
    )
  }

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>
          Let&apos;s Work <br /> Together
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>
            <a href="mailto:2612adityasingh2000@gmail.com">
              2612adityasingh2000@gmail.com
            </a>
          </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kanpur,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kanpur, India
            </a>
          </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>
            <a href="tel:9721880384">9721880384</a>
          </span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <input type="text" name="name" required placeholder="Name" />
          <input type="email" name="email" required placeholder="Email" />
          <textarea name="message" required placeholder="Message" />
          <button type="submit">Submit</button>
          {error && <div style={{ color: 'red' }}>Something went wrong</div>}
          {success && (
            <div style={{ color: 'green' }}>Message sent successfully.</div>
          )}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
