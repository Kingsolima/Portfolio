"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'
import Link from "next/link";

const Page = () => {
  return (
    <main className='h-screen relative'>
      <div
        className='flex items-center w-full h-full bg-cover bg-center px-10'
        style={{ 
          backgroundImage: "url('duck.png')", 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center',
        }}
      >
        <div className='flex flex-col items-center space-y-6'>
          {/* Render just the first project card for now */}
          <ProjectCard
            title={Projects[0].title}
            text={Projects[0].text}
            image={Projects[0].src}
          />

          {/* Learn More button under the card */}
          <Link href='/my-projects/portfolio-project'>
            <div className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white hover:bg-white/10 transition-all duration-300'>
              Learn More
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Page
