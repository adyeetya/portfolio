import React from 'react'
import { motion } from 'framer-motion'
import './Skills.scss'
const Skills = () => {
  const variants = {
    initial: {
      y: 100,
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
  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>My Skills</motion.h1>
        <motion.p variants={variants}>
          Just a simple list of things I know and have worked with...
        </motion.p>
        <motion.div variants={variants} className="items">
          <motion.div className="item" variants={variants}>
            <h2>NEXT JS</h2>
            <span>⭐ ⭐ ⭐ ⭐</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>CSS and Tailwind</h2>
            <span>⭐ ⭐ ⭐ ⭐</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>JavaScript</h2>
            <span>⭐ ⭐ ⭐ ⭐</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>React.js</h2>
            <span>⭐ ⭐ ⭐ ⭐</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Node.js and Express.js</h2>
            <span>⭐ ⭐ ⭐ ⭐</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Mongo DB</h2>
            <span>⭐ ⭐ ⭐ ⭐</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>SQL</h2>
            <span>⭐ ⭐ ⭐ </span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Framer Motion</h2>
            <span>⭐ ⭐ ⭐ </span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>TypeScript</h2>
            <span>⭐ ⭐ </span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>AWS</h2>
            <span>⭐ </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
