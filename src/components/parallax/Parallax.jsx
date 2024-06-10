import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './parallax.scss'
const Parallax = ({ type }) => {
  const ref = useRef()
  // we are ref-ing the whole div of parallax to measure the y scroll its is measured useing
  // the useScroll hook and its value will be in scrollYProgress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
    // this means the animation starts when the top of the target ref reaches the top of the view height
    // and ends when the end of the target reaches the start of the viewport
  })
  //   console.log(scrollYProgress)

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '300%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '70%'])

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === 'services' ? 'What I Do?' : 'Project Showcase'}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === 'services' ? '/planets.png' : '/sun.png'
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  )
}

export default Parallax
