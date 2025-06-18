'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  image: string
  title: string
  text: string
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <div
      onClick={handleFlip}
      className='w-[450px] h-[280px] rounded-md cursor-pointer perspective-1000'
    >
      <motion.div
        className='relative w-full h-full'
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          style={{
            backgroundImage: `url(${image})`,
            backfaceVisibility: 'hidden',
          }}
          className='absolute w-full h-full group bg-cover bg-center text-white rounded-lg p-4'
        >
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300' />
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-[20px] pb-10'>
            Learn more &gt;
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            backgroundImage: `url(${image})`,
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
          className='absolute w-full h-full bg-cover bg-center text-white rounded-lg p-4'
        >
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]' />
          <div className='flex flex-col justify-center h-full gap-4 z-30'>
            <h1 className='text-white text-2xl font-semibold'>{title}</h1>
            <p className='text-gray-200 text-[16px]'>{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
