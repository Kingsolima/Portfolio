// ✅ "use client" — required to use React hooks (like useState, useEffect)
"use client";

// ✅ Imports list of nav items (like icons and links)
//import { NavLinks } from '@/constants';

// ✅ For navigating client-side
import Link from 'next/link';

// ✅ usePathname gives you the current route path (e.g., '/my-projects')
import { usePathname } from 'next/navigation';

// ✅ React hooks and Transition component
import React, { useEffect, useState } from 'react';
import Transition from './Transition';


const Navigation = () => {
    const [isRouting, setisRouting] = useState(false); // is a transition happening
    const path = usePathname();                        // current route path (e.g., '/my-skills')
    const [isActive, setIsActive] = useState(path);    // stores active route (you don’t seem to use this yet)
    const [prevPath, setPrevPath] = useState("/");     // stores previous path  
    
    useEffect(() => {
        if(prevPath !== path){
          setisRouting(true);  // Trigger transition animation
        }
      }, [path, prevPath]);    

      useEffect(() => {
        if(isRouting){
          setPrevPath(path);  // Update previous path
          const timeout = setTimeout(() => {
            setisRouting(false);  // End transition after animation
          }, 1200); // Must match Transition duration
          return () => clearTimeout(timeout); // Cleanup timer
        }
      }, [isRouting]);    
    
      return (
        <div 
          style={{left: "20%"}}
          className='absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-bottom items-center border bg-black border-white'>    
        
        {isRouting && <Transition />}
        {/*{NavLinks.map((nav) => (
            <Link
            key={nav.name}
            href={nav.link}
            className='mb-16 pl-4 min-w-[20%]'
            >
            <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800" : "text-white"}`} />
            </Link>
        ))}*/}
    </div>
  )
}

export default Navigation