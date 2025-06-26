import React from 'react'
import BioCard from "@/components/BioCard";

const page = () => {
  return (
     // ✅ Full-screen section with a background image
    // The outermost container using Tailwind to take up the full screen and be relatively positioned
    <main className='h-screen relative'>
    <div
      className='flex items-center w-full h-full bg-cover bg-center'
      style={{ 
        backgroundImage: "url('setting.png')", 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center'
      }}
    >
      
    <div className="flex justify-center items-center h-screen">
  
  <BioCard /> 
  
    </div>
    </div>
    </main>
  )
}

export default page
//have text to look like retro game