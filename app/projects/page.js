"use client";
import workData from "../../assets/mywork_data";
import Link from "next/link";
import Image from "next/image";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col bg-gray-900/80 border border-gray-800 rounded-2xl shadow-lg p-6 gap-4 max-w-md w-full hover:scale-[1.03] transition-transform">
      {project.image && (
        <div className="w-full h-48 mb-2 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
          <Image src={project.image} alt={project.title} width={320} height={192} className="object-contain w-full h-full" />
        </div>
      )}
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          {project.title}
        </h2>
        <p className="text-gray-300 text-base line-clamp-3">{project.description}</p>
      </div>
      <div className="flex justify-end mt-2">
        <Link href={`/projects/${project.id}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-transform">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="flex flex-col items-center gap-10 text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
        {workData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
