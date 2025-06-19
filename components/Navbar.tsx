import { Socials } from "@/constants"; // Imports list of social media icons from your constants file
import Image from "next/image";        // Next.js optimized image component
import React from "react";             // React is required to build this component

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/horseLogo.jpg"          // Local image file in /public folder
            alt="logo"                    // Alt text for accessibility
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full" // Full size, round image
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Webchain{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Dev{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;