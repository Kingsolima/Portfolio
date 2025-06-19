// ✅ Enables client-side rendering so you can use hooks, Swiper, etc.
"use client";

// ✅ Import React (required for JSX)
import React from "react";

// ✅ Import Swiper components to build carousels
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // ✅ Import basic Swiper styles

// ✅ Import your list of skills from a constant file
import { SkillData } from "@/constants";

// ✅ Import Next.js optimized image component
import Image from "next/image";

// ✅ Import Swiper autoplay module
import { Autoplay } from "swiper/modules";



const Page = () => {
  return (
    // ✅ Full-screen section with background image and centered content
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      {/* ✅ Content wrapper */}
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">

        {/* ✅ Heading and subheading */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[20px]">
            Using the latest tech this world has to offer
          </p>
        </div>

        <Swiper
          slidesPerView={5}                     // Show 5 logos at once
          loop={true}                           // Infinite looping
          autoplay={{ delay: 0, disableOnInteraction: false }} // No delay, just keep scrolling
          speed={5000}                          // Scroll speed (lower = slower)
          modules={[Autoplay]}                  // Load the autoplay module
          className="max-w-[80%]"
        >
          {/* ✅ Loop over SkillData to show each skill */}
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}               // Logo image URL
                alt={skill.name}                // Alt text for accessibility
                width={skill.width}             // Image width from SkillData
                height={skill.height}           // Image height from SkillData
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true              // ✅ Scrolls the opposite direction
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Page;