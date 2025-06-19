// ✅ Enables client-side rendering — required for using components with interactivity
"use client"

// ✅ Import the ProjectCard component (used to show each project)
import ProjectCard from '@/components/ProjectCard'

// ✅ Import your array of project data from constants file
import { Projects } from '@/constants'

// ✅ Import React (needed for JSX)
import React from 'react'


const Page = () => {
  return (
    // ✅ Full-screen section with a background image
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}  // 📷 Mountain image as page background
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'
    >
      {/* ✅ A responsive grid to display project cards in 2 columns */}
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}               // Required unique key for each item in a loop
            title={project.title}     // Project title
            text={project.text}       // Project description
            image={project.src}       // Project image
          />
        ))}
      </div>
    </div>
  )
}

export default Page