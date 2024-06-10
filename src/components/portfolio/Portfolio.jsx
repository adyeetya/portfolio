import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
const items = [
  {
    id: 1,
    title: 'Hippo UI - Digital Assets Marketplace Application',
    img: '/hippoui.png',
    link: 'http://hippoui.onrender.com/',
    github: 'https://github.com/adyeetya/HippoUI',
    desc: 'Hippo UI offers a seamless, integrated full-stack solution by combining Next.js, TypeScript, MongoDB, Node.js, and Express, creating a robust and scalable platform for digital asset marketplace operations. Utilizing Payload CMS, Hippo UI ensures efficient content management, enabling administrators to easily organize, update, and publish digital assets, while maintaining flexibility and scalability. For secure payment processing, Hippo UI integrates Stripe, providing users with a reliable and secure environment for buying and selling digital assets, thus enhancing user experience and ensuring smooth transactions within the marketplace.',
  },
  {
    id: 2,
    title: 'Baper - AI-Powered PDF Analyzer',
    img: '/baper.png',
    link: 'https://www.youtube.com/watch?v=1aY7Fykfakw&ab_channel=AdityaSingh',
    github: 'https://github.com/adyeetya/Baper',
    desc: 'Baper excels in advanced document processing by leveraging OpenAIs cutting-edge API for efficient PDF file handling. The application employs Next.js and TypeScript on the frontend for a seamless user experience, while its backend features PostgreSQL for robust data storage and TRPC for efficient client-server communication. Baper intelligently analyzes PDF content to generate accurate answers to user-provided questions, utilizing OpenAIs advanced natural language processing capabilities for quick and precise information retrieval. Additionally, Baper integrates Pinecone for efficient PDF handling and vectoring, allowing users to easily upload and index PDF files, ensuring fast and accurate content retrieval and a streamlined user experience.',
  },
  {
    id: 3,
    title: 'Comfy Home E-Commerce',
    img: '/comfyhome.png',
    link: 'https://comfyhome-ecommerce-aditya.netlify.app/',

    desc: 'I developed a fully functional e-commerce website using React, which includes multiple pages, a shopping cart, and robust user authentication features. By leveraging React fundamentals and incorporating various libraries, I was able to create a seamless and intuitive user experience, significantly enhancing the websites functionality. Throughout the development process, I demonstrated strong proficiency in front-end development, ensuring a polished and responsive interface. Additionally, my project management skills were highlighted as I effectively coordinated all aspects of the project from initial planning to final implementation, resulting in a high-quality, user-friendly e-commerce platform.',
  },
  {
    id: 4,
    title: 'Contact Management Application',
    link: '',
    github: '',
    img: '',
    desc: 'I developed a comprehensive contact management application using Node.js, Express.js, and MongoDB, featuring functionalities such as user registration, login, and the ability to create, delete, and update contacts. By employing JWT for secure authentication and encryption, I ensured robust protection of user data. Utilizing the powerful combination of Node.js and Express.js for the backend, the application delivers efficient and scalable performance. Throughout the development process, I demonstrated expertise in backend development and effectively integrated various technologies to provide a seamless and secure user experience, resulting in a reliable and user-friendly contact management solution.',
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
            {item.img ? (
              <img src={item.img} alt={item.title} />
            ) : (
              <div
                style={{
                  position: 'relative',
                  height: '100%',
                  cursor: 'pointer',
                }}
              >
                <img
                  className="all-projects"
                  src="/projects.jpeg"
                  alt="checkout"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                  }}
                >
                  <a className="project-link">Checkout all Projects</a>
                </div>
              </div>
            )}
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div>
              <a href={item.link}>See Demo</a>
              {item.github && <a href={item.github}>Github</a>}
            </div>
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
        <h1>Featured Project</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Portfolio
