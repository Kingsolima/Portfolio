import React from "react";
import Image from "next/image";

const BioCard = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
    <div className="relative position-absolute flex flex-col md:flex-row justify-between items-center bg-white/10 backdrop-blur-md border border-white rounded-xl p-6 w-[1400px] mx-auto">
      
      {/* Text Section */}
      <div className="text-white space-y-4 w-full md:w-2/3">
        <h2 className="text-3xl font-bold">Omar Soliman</h2>
        <p>
          I'm a 19-year-old founder, AI developer, and venture analyst building at the intersection of product, deep tech, and design. I'm currently pursuing a double degree in Computer Science and (hopefully) Business, where I'm blending engineering with entrepreneurship—one prototype, pitch, and launch at a time.
        </p>
        <p>
          I'm spending this summmer building tools powered by LLMs, deploying MVPs like <strong>VC Evaluator</strong> (a GPT-powered due diligence tool about to be used by my firm). I intern at <strong>Zweelie</strong>, where I help ship AI-driven marketing solutions, and I support my family's venture firm, where we manage $30M AUM and invest in early-stage tech across North America.
        </p>
        <p>
          On campus, I'm part of a self-driving car club (WEAP), working on autonomy and ML pipelines. I'm also taking a leadership program where I aim to launch an impact project by next year. Whether it's coding in Python, modeling in PyTorch, or cold-emailing LPs, I thrive at the edge of execution and ambition.
        </p>
        <p>
          My long-term vision is to build and exit a unicorn startup, then transition into building institutions: first scaling our venture fund to $100M+, and later helping shape public tech policy. I believe in solving real problems with clarity, speed, and soul. Also in building things that last far beyond the hype.
        </p>
        <p className="italic text-sm opacity-80">
          Currently exploring: RAG, Next.js, VC tools, and computer vision.
        </p>
      </div>

      {/* Info Card Image */}
      <div className="mt-6 md:mt-0 md:ml-6">
        <Image
          src="/me.png"
          alt="info card"
          width={300}
          height={550}
          className="rounded-md"
        />
      </div>
    </div>
    </div>
  );
};

export default BioCard;
