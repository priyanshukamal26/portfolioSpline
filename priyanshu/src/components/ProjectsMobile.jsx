import React, { useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter";
// --- 1. Import your project images ---
import reddotImg from '../assets/projects/image6reddot.png';
import newslabsImg from '../assets/projects/image5newslabs.png';
import schedulexImg from '../assets/projects/img3scXHP.png';

// --- Data for the projects ---
const projectData = [
    {
        title: 'RedDot',
        tagline: 'Menstrual telemetry meets zero-knowledge privacy — local-first client encryption, every byte secured',
        description: 'A local-first, zero-knowledge menstrual health tracker securing intimate reproductive telemetry through client-side cryptography (AES-GCM-256 & PBKDF2), adaptive irregular-cycle forecasting, and stateless AI lab analysis.',
        imageUrl: reddotImg,
        liveUrl: 'https://reddot-xi.vercel.app/',
        repoUrl: 'https://github.com/priyanshukamal26/reddot',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Groq', 'Motion'],
    },
    {
        title: 'NewsLabs',
        tagline: 'RSS meets AI orchestration — real-time news intelligence, every story synthesized',
        description: 'An AI-powered news intelligence platform that aggregates RSS feeds, synthesizes insights with multi-provider LLMs (Gemini, Groq, Ollama), delivers automated briefings, and tracks reading habits with sub-50ms hybrid NLP classification.',
        imageUrl: newslabsImg,
        liveUrl: 'https://newslabs.vercel.app/',
        repoUrl: 'https://github.com/priyanshukamal26/newslabs',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Prisma', 'PostgreSQL', 'Groq'],
    },
    {
        title: 'ScheduleX',
        tagline: 'Graph theory meets academic scheduling — clash-free exam timetables in milliseconds',
        description: 'A BFS-based clash-free university course and exam timetable generator using Kahn’s topological sort on directed graph nodes, with a high-performance C++ engine compiled directly to WebAssembly for instant in-browser computation.',
        imageUrl: schedulexImg,
        liveUrl: 'https://priyanshukamal26.github.io/scheduleX/',
        repoUrl: 'https://github.com/priyanshukamal26/scheduleX',
        tags: ['C++', 'WebAssembly', 'TypeScript', 'Tailwind CSS', 'Python'],
    },
];

export default function ProjectsMobile() {
    const displayedProjects = projectData.slice(0, 3);

    return (
        <section id="projects-mobile" className="w-full bg-white text-black py-12 px-2">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-pixel underline-wavy-yellow inline-block">
                    <Highlighter action="underline" color="#FFD700">
                        Projects 🚀
                    </Highlighter>
                </h2>
            </div>
            <div className="flex flex-col gap-6 max-w-md mx-auto">
                {displayedProjects.map((project, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex flex-col">
                        <div className="w-full h-44 rounded-xl overflow-hidden mb-3 bg-gray-100">
                            {project.videoUrl ? (
                                <video
                                    src={project.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    poster={project.imageUrl}
                                />
                            ) : (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <h3 className="text-xl font-bold mb-1 font-pixel">{project.title}</h3>
                        {project.tagline && (
                            <p className="text-xs font-medium text-amber-700 italic mb-2">
                                {project.tagline}
                            </p>
                        )}
                        <p className="text-xs text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tags && project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-100 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-gray-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-auto pt-2 border-t border-gray-100">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg"
                            >
                                Live Demo ↗
                            </a>
                            {project.repoUrl && project.repoUrl !== '#' && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200"
                                >
                                    View Code ↗
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* View More on GitHub Button */}
            <div className="text-center mt-8">
                <a
                    href="https://github.com/priyanshukamal26/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn !w-auto !px-6 text-sm"
                >
                    View more on GitHub
                </a>
            </div>
        </section>
    );
}