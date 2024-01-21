import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur excepturi officia enim veritatis numquam sint provident reiciendis eum iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur excepturi officia enim veritatis numquam sint provident reiciendis eum iusto!',
  },
  {
    id: 2,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur excepturi officia enim veritatis numquam sint provident reiciendis eum iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur excepturi officia enim veritatis numquam sint provident reiciendis eum iusto!',
  },
  {
    id: 3,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur excepturi officia enim veritatis numquam sint provident reiciendis eum iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur excepturi officia enim veritatis numquam sint provident reiciendis eum iusto!',
  },
  {
    id: 4,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur excepturi officia enim veritatis numquam sint provident reiciendis eum iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur excepturi officia enim veritatis numquam sint provident reiciendis eum iusto!',
  },
]

const Single = ({ item }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
    // because the at the begin the progress bar is at 100% and at end its at 0%
    // offset is an array of at least two intersections.
    // An intersection describes a point when the target and container meet. So for example,
    // "start end" means when the start of the target meets the end of the container.
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Portfolio
