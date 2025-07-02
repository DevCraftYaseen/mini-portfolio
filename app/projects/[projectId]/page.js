"use client";
import workData from "../../../assets/mywork_data";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage({ params }) {
  const { projectId } = params;
  const projectIndex = workData.findIndex((p) => p.id == projectId);
  const project = workData[projectIndex];

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-3xl font-bold text-red-400 mb-4">Project Not Found</h1>
        <Link href="/projects" className="px-6 py-2 rounded-lg border border-cyan-400 text-cyan-300 font-semibold bg-gray-900/60 hover:bg-cyan-400/20 transition-colors mt-2">Back to Projects</Link>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? workData[projectIndex - 1] : null;
  const nextProject = projectIndex < workData.length - 1 ? workData[projectIndex + 1] : null;

  return (
    <section className="flex flex-col items-center gap-8 text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-2">
        {project.title}
      </h1>
      {project.image && (
        <div className="w-full max-w-xl h-64 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center mx-auto">
          <Image src={project.image} alt={project.title} width={480} height={256} className="object-contain w-full h-full" />
        </div>
      )}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-2">{project.description}</p>
      <div className="flex flex-wrap justify-center gap-3 mb-2">
        {project.technologies && project.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 rounded-full bg-cyan-900/40 text-cyan-200 font-semibold border border-cyan-400 text-xs">{tech}</span>
        ))}
      </div>
      <div className="bg-gray-900/80 rounded-lg p-6 max-w-xl mx-auto shadow-md">
        <h2 className="text-xl font-semibold text-cyan-300 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-200 text-left">
          {project.keyPoints && project.keyPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        {project.uniqueFeature && (
          <div className="mt-4 text-cyan-400 text-sm text-left">
            <span className="font-bold">Unique Feature:</span> {project.uniqueFeature}
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-transform">Live Demo</a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg border border-cyan-400 text-cyan-300 font-semibold bg-gray-900/60 hover:bg-cyan-400/20 transition-colors">Source Code</a>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          href={prevProject ? `/projects/${prevProject.id}` : "#"}
          className={`px-6 py-2 rounded-lg border border-gray-700 text-gray-400 font-semibold bg-gray-900/60 transition-colors ${!prevProject ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-400/20 hover:text-cyan-300"}`}
          aria-disabled={!prevProject}
          tabIndex={!prevProject ? -1 : 0}
        >
          Previous Project
        </Link>
        <Link
          href="/projects"
          className="px-6 py-2 rounded-lg border border-cyan-400 text-cyan-300 font-semibold bg-gray-900/60 hover:bg-cyan-400/20 transition-colors"
        >
          Back to Projects
        </Link>
        <Link
          href={nextProject ? `/projects/${nextProject.id}` : "#"}
          className={`px-6 py-2 rounded-lg border border-gray-700 text-gray-400 font-semibold bg-gray-900/60 transition-colors ${!nextProject ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-400/20 hover:text-purple-300"}`}
          aria-disabled={!nextProject}
          tabIndex={!nextProject ? -1 : 0}
        >
          Next Project
        </Link>
      </div>
    </section>
  );
}
