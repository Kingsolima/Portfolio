import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Home() {
  return (
    <main className='h-screen relative'>
      <div
        className='flex items-center w-full h-full bg-cover bg-center'
        style={{ backgroundImage: "url('/main-bg.webp')" }}
      >
        <div className='max-w-[750px] mx-auto px-6 w-[95%] md:px-10 flex-col gap-5 z-[10] ml-9'>
          <h1 className='text-[40px] text-white font-bold'>
            Make anything possible with{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
              Web Development
            </span>
          </h1>

          <p className='text-gray-200 hidden md:block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className='flex-col md:flex-row hidden md:flex gap-4 mt-7'>
            <Link href='/my-projects'>
              <div className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                Learn more
              </div>
            </Link>
            <Link href='/contact-me'>
              <div className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                My projects
              </div>
            </Link>
            <Link href='/my-skills'>
              <div className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                Contact me
              </div>
            </Link>
          </div>
        </div>

        <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
          <Link href='/my-projects'>
            <div className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Learn more
            </div>
          </Link>
          <Link href='/contact-me'>
            <div className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              My projects
            </div>
          </Link>
          <Link href='/my-skills'>
            <div className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Contact me
            </div>
          </Link>
        </div>

        <div className='absolute bottom-0 right-0 z-[10]'>
          <Image
            src='/horse.png'
            alt='horse'
            height={300}
            width={300}
            className='absolute right-45 top-40'
          />
          <Image
            src='/cliff.webp'
            alt='cliff'
            width={480}
            height={480}
          />
        </div>
        <div className='absolute bottom-0 z-[5] w-full h-auto'>
        <Image
            src='/trees.webp'
            alt='trees'
            width={2000}
            height={2000}
            className='w-full h-full'
          />
        </div>
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

export default Home;
