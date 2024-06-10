import React, { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Services = () => {
  const ref = useRef()
  const isInView = useInView(ref, { margin: '-100px' })
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      //   animate={isInView && 'animate'}
      animate={'animate'}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Turning Ideas</b>
          </h1>
        </div>
        <div className="title">
          <h1>
            into <b>Realities</b>
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Modular Kitchen Website</h2>
          <p>
            Next.js site for modular interior and kitchen solutions, showcasing
            over 600 designs and products. This initiative resulted in a 20%
            increase in user interactions and a 10% rise in product inquiries
            since launch.
          </p>

          <a href="https://manufacturer-site.vercel.app/">Check it out</a>
        </motion.div>
        <motion.div className="box">
          <h2>Design Indian Homes Website</h2>
          <p>
            Next.js site, boosting online inquiries by 20%, traffic by 15%, and
            reducing bounce rate by 30%. This translated to 500 additional
            monthly inquiries, 2000 more monthly visitors, and a 25% increase in
            average session duration.
          </p>
          <a href="https://designindianhomes.com/">Check it out</a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
