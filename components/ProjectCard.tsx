'use client'

// Import React and useState for interactivity
import React, { useState } from 'react'
// Import motion from Framer Motion for animation effects
import { motion } from 'framer-motion'

// Define the expected props: image URL, title, and text
interface Props {
  image: string
  title: string
  text: string
}

// ProjectCard component definition
const ProjectCard = ({ image, title, text }: Props) => {
  // Track if the card is flipped or not
  const [isFlipped, setIsFlipped] = useState(false)
  // Prevent multiple flips during animation
  const [isAnimating, setIsAnimating] = useState(false)

  // Function to handle the card flip
  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    // Card container with click event to flip
    <div
      onClick={handleFlip}
      className='w-[450px] h-[280px] rounded-md cursor-pointer perspective-1000'
    >
      {/* Animate the flip using motion.div */}
      <motion.div
        className='relative w-full h-full'
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front side of the card */}
        <div
          style={{
            backgroundImage: `url(${image})`,
            backfaceVisibility: 'hidden',
          }}
          className='absolute w-full h-full group bg-cover bg-center text-white rounded-lg p-4'
        >
          {/* Hover overlay effect */}
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300' />

          {/* Text appears on hover */}
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-[20px] pb-10'>
            Learn more &gt;
          </div>
        </div>

        {/* Back side of the card */}
        <div
          style={{
            backgroundImage: `url(${image})`,
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
          className='absolute w-full h-full bg-cover bg-center text-white rounded-lg p-4'
        >
          {/* Semi-transparent overlay behind text */}
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]' />

          {/* Project title and description */}
          <div className='flex flex-col justify-center h-full gap-4 z-30'>
            <h1 className='text-white text-2xl font-semibold'>{title}</h1>
            <p className='text-gray-200 text-[16px]'>{text}</p>
          </div>
        </div>
        {/*Make it so that the there is fourth thing that will be considered similar to text and title and image in index.ts, and ProjectCard.tsx for the sake of adding projects in the website,
         is the link to the page that will describe that specific project, like a demo page. We will accomplish this in similar fashion as to how we did this for text, title, and image.*/}
      </motion.div>
    </div>
  )
}

// Export the ProjectCard component
export default ProjectCard
