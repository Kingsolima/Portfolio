// ✅ "use client" enables this file to run on the browser (needed for animation hooks)
"use client";

// ✅ Import React (for JSX)
import React from 'react';

// ✅ Import motion from Framer Motion (animation library)
import { motion } from 'framer-motion';


// ✅ Reusable animation states for page transitions
const TransitionVariants = {
    initial: {
      y: "100%",      // Start off-screen (from bottom)
      height: "100%", // Full height while sliding in
    },
    animate: {
      y: "0%",        // Move to top (cover screen)
      height: "0%",   // Shrinks up (disappears)
    },
    exit: {
      y: ["0%", "100%"],       // Slide down to bottom again
      height: ["0%", "100%"],  // Expand height as it leaves
    }
  };
  
  const Transition = () => {
    return (
      <div>  
        <motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#2e2257]'
        variants={TransitionVariants}
        initial='initial'     // Apply 'initial' variant first
        exit='exit'           // When component unmounts
        animate='animate'     // Animate to 'animate' state
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut"
        }}
      />

        <motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#3b2d71]'
        variants={TransitionVariants}
        initial='initial'
        exit='exit'
        animate='animate'
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: "easeInOut"
        }}
      />


        <motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#4b3792]'
        variants={TransitionVariants}
        initial='initial'
        exit='exit'
        animate='animate'
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: "easeInOut"
        }}
      />


        
    </div>
  )
}

export default Transition