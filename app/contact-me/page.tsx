// ✅ Import your custom ContactForm component
import ContactForm from "@/components/ContactForm";

// ✅ Import React so you can use JSX
import React from "react";


const Page = () => {
  return (
    // ✅ Full-screen container with a background image and centered content
    
    <div
      style={{ backgroundImage: "url(sunsetting.png)" }}  // Outer background (e.g., dark space)
      className="overflow-hidden w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
      className="h-[60%] w-[80%] relative rounded-xl border border-white bg-white/10 backdrop-blur-md"
      >

        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;