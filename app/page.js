// app/page.js
import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
        Welcome to My Portfolio
      </h1>
      <div className="relative rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl w-[200px] h-[200px] animate-float">
        <Image src="/profile-img.webp" alt="Profile" width={200} height={200} className="object-cover w-full h-full" />
      </div>
      <p className="text-lg md:text-xl text-gray-300 max-w-xl animate-fade-in-delay">
        I’m learning <span className="font-semibold text-cyan-400">Next.js</span> and this is my first project!
      </p>
      <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 max-w-xl mt-4 shadow-md animate-fade-in-delay">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2">About Me</h2>
        <p className="text-gray-200 mb-2">
          Hi! I&apos;m an aspiring web developer passionate about building modern, responsive web applications. I enjoy exploring new technologies and frameworks, especially in the JavaScript ecosystem.
        </p>
        <p className="text-gray-200 mb-2">
          My interests include UI/UX design, front-end development, and learning best practices for creating accessible and performant websites.
        </p>
        <p className="text-gray-200">
          When I&apos;m not coding, I like reading tech blogs, experimenting with design tools, and collaborating with other developers on open-source projects.
        </p>
      </div>
    </section>
  );
}
