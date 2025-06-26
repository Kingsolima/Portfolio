import { Socials } from "@/constants"; // Imports list of social media icons from your constants file
import Image from "next/image";        // Next.js optimized image component
import React from "react";             // React is required to build this component
import Link from "next/link"
import { TopNavLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Link href='//'>
          <Image
            src="/logome.png"          // Local image file in /public folder
            alt="logo"                    // Alt text for accessibility
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full" // Full size, round image
          />
          </Link>
        </div>
        <Link href = "//">
        <h1 className="text-white text-[25px] font-semibold">
          Omar{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Soliman{" "}
          </span>
        </h1>
        </Link>
      </div>

      <div className="hidden md:flex gap-4">
  {TopNavLinks.map((nav) => (
    <Link key={nav.name} href={nav.link}>
      <div className="px-4 py-2 rounded-full border bg-blue-300 border-white text-white hover:bg-blue-200 hover:scale-105 transition duration-300">
        <span className="text-sm font-medium">{nav.name}</span>
      </div>
    </Link>
  ))}
</div>




      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Link href={social.link} key={social.name} target="_blank">
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;