import React from 'react'
import { CONTACT } from '../constants'
import {  motion } from "framer-motion"

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5 }}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1 }}
            className='my-4'>{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1 }}
            className='my-4'>{CONTACT.phoneNo}</motion.p>
          <div>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`} className='border-b'>
  {CONTACT.email}
</a>

  <br />
  <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className='border-b'>
    {CONTACT.linkedin}
  </a>
  <br /><br />
  <a href={CONTACT.pdf} target="_blank" rel="noopener noreferrer" className='mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-purple-900'>
    Resume
  </a>
</div>
        </div>
        </div>
  )
}

export default Contact