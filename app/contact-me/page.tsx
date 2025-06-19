// ✅ Import your custom ContactForm component
import ContactForm from "@/components/ContactForm";

// ✅ Import React so you can use JSX
import React from "react";


const Page = () => {
  return (
    // ✅ Full-screen container with a background image and centered content
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}  // Outer background (e.g., dark space)
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}  // ❗ Missing closing quote! Fix: `"url('/atombg-comp.webp')"`
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >

        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;