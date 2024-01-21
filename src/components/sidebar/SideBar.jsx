import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './links/Links'
import './sidebar.scss'
import ToggleButton from './toggleButton/ToggleButton'
const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}
const SideBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      {/* this bg div is the white sidebar part with all the links inside of it the animation
    of open and closed it applied to this in the open animation the clippath is circle but
    because the radius of the circle is 1200 and the width of the bg is only 400 it looks like a rect in the side */}
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default SideBar
