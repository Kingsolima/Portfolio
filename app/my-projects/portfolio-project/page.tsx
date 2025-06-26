import React from 'react';

const Page = () => {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('/duck.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
<div className="w-full max-w-4xl mt-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-8 text-white space-y-8 shadow-xl">

        <h1 className="text-4xl font-bold border-b border-white pb-2">Project Demo</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p>
            This is my first project built using Next.js. It's a portfolio website designed to showcase
            all the projects I'm proud of. Each project page includes a video demo, description, 
            the challenges I faced, key takeaways, and tools used. You can also reach out to me through 
            various platforms (top right icons) or via the Contact Me page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">What Was Difficult</h2>
          <p>
            This was my first time working with Next.js, and getting used to the file-based routing and 
            server/client separation took some time. There was a learning curve, but it was worth it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">What I Learned</h2>
          <p>
            I've only scratched the surface of what's possible with Next.js. From static site generation 
            to API routes, this framework has so much to offer—and I'm excited to keep exploring.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Tools Used</h2>
          <p>
            <strong>Tech Stack:</strong> Next.js, Tailwind CSS, TypeScript, and Vercel for deployment.
          </p>
        </section>

      </div>
    </main>
  );
};

export default Page;
