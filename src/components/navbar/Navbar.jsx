import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import SideBar from '../sidebar/SideBar'
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ADI
        </motion.span>
        <div className="social">
          <a href="https://github.com/adyeetya" target="_blank">
            <img src="/github-sign.png" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-singh-36921b221/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://leetcode.com/u/adyeetya_/" target="_blank">
            <img src="/LeetCode.png" alt="leetcode" />
          </a>
          <a href="mailto:2612adityasingh2000@example.com" target="_blank">
            <img src="/mail.png" alt="mail" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
