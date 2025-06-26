// Importing the React library, which is required to use JSX
import React from 'react';

// Importing Next.js Link component to handle client-side navigation
import Link from 'next/link';

// Importing Next.js Image component for optimized image loading
import Image from 'next/image';

// This is the main functional component called 'Home'
function Home() {
  return (
    // The outermost container using Tailwind to take up the full screen and be relatively positioned
    <main className='h-screen relative'>

      {/* Full-screen section with a background image, centered content using Flexbox */}
      <div
        className='flex items-center w-full h-full bg-cover bg-center'
        style={{ 
          backgroundImage: "url('homepage4.png')", 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center'
        }} // inline CSS for background image
      >
        <div></div>
        {/* Text and button section aligned to the left, responsive padding and width */}
        <div className='max-w-[750px] mx-auto px-6 w-[95%] md:px-10 flex-col gap-5 z-[10] ml-9'>
          
          {/* Heading text with a gradient span inside */}
          <h1 className='text-[40px] text-white font-bold'>
            My Portfolio {' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
              {' '}Website{' '}
            </span>
          </h1>

          {/* A paragraph that's only visible on medium screens and above */}
          <p className='text-gray-200 hidden md:block'>
          I'm Omar, an aspiring developer with a passion for building AI-powered products and modern web experiences. I'm currently learning the full stack from the ground up, with a focus on React, Next.js, and creative design. My goal is to bring ideas to life through clean code and meaningful products.


          </p>

          {/* Group of navigation buttons, hidden on small screens */}
          <div className='flex-col md:flex-row hidden md:flex gap-4 mt-7'>
            
            {/* Button: Navigates to /my-projects */}
            <Link href='/my-projects'>
              <div className='rounded-[20px] group relative bg-transparent hover:bg-blue-400 px-5 border border-white py-3 text-lg text-white max-w-[200px]'>
                My Projects
              </div>
            </Link>

            {/* Button: Navigates to /contact-me */}
            <Link href='/contact-me'>
              <div className='rounded-[20px] group relative bg-transparent border  hover:bg-blue-400 border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                Contact Me
              </div>
            </Link>

            {/* Button: Navigates to /my-skills */}
            <Link href='/about-me'>
            <div className='rounded-[20px] group relative bg-transparent border  hover:bg-blue-400 border-white px-5 py-3 text-lg text-white max-w-[200px]'>
            About me
              </div>
            </Link>

            {/* Button: Navigates to /my-skills */}
            <Link href='/my-skills'>
              <div className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                My Skills
              </div>
            </Link>

            <div className="absolute bottom-8 right-170">
      <Image
          src="/pixel-me.png" // my info card that looks like apart of the game
          alt="Pixel Art of Me"
          width={100}
          height={175}
          className="mb-2" //what is this
        />
        </div>

          </div>
        </div>

        {/* Same buttons as above but shown only on mobile (small screens) */}
        <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
          <Link href='/my-projects'>
            <div className='rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
              My projects
            </div>
          </Link>
          <Link href='/contact-me'>
            <div className='rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
              Contact Me
            </div>
          </Link>
          <Link href='/my-skills'>
            <div className='rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]'>
              Learn More
            </div>
          </Link>
        </div>

        {/* Decorative section with horse and cliff images positioned at the bottom-right */}
        {/* <div className='absolute bottom-0 right-0 z-[10]'>
          <Image
            src='/horse.png'    // Horse image
            alt='horse'
            height={300}
            width={300}
            className='absolute right-45 top-40'  // Positioned manually
          />
          <Image
            src='/cliff.webp'   // Cliff background
            alt='cliff'
            width={480}
            height={480}
          />
        </div>*/}

        {/* Decorative section with full-width trees image along the bottom */}
        {/*<div className='absolute bottom-0 z-[5] w-full h-auto'>
          <Image
            src='/trees.webp'   // Trees image
            alt='trees'
            width={2000}
            height={2000}
            className='w-full h-full'
          />
        </div>*/}

        {/* Stars image in the top-left corner */}
        <Image
          src='/stars.png'
          alt='stars'
          width={300}
          height={300}
          className='absolute top-0 left-0 z-[10]'
        />
      </div>
    </main>
  );
}

// Export the component so it can be used as the homepage
export default Home;
