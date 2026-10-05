"use client"

import React, { useState } from 'react';
import GlareHover from './GlareHover';
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";


// --- 1. Import your project images ---
import reddotImg from '../assets/projects/image6reddot.png';
import newslabsImg from '../assets/projects/image5newslabs.png';
import schedulexImg from '../assets/projects/img3scXHP.png';

// --- Data for the projects ---
const projectData = [
    {
        title: 'RedDot',
        tagline: 'Menstrual telemetry meets zero-knowledge privacy — local-first client encryption, every byte secured',
        description: 'A local-first, zero-knowledge menstrual health tracker and community platform securing intimate reproductive telemetry through client-side cryptography (AES-GCM-256 & PBKDF2), adaptive irregular-cycle forecasting, and stateless AI lab analysis.',
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

// --- Single Project Card Component ---
const ProjectCard = ({ project }) => (
    <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.2}
        glareAngle={-30}
        glareSize={260}
        transitionDuration={800}
        playOnce={true}
        width="100%"
        height="100%"
        background="#fff"
        borderRadius="16px"
        className="project-column-card shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
    >
        <div className="flex flex-col w-full h-full bg-white rounded-[16px] overflow-hidden text-left">
            <div className="w-full h-44 overflow-hidden bg-gray-50 relative shrink-0 border-b border-gray-100">
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
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                )}
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 font-pixel mb-1">
                        {project.title}
                    </h3>
                    {project.tagline && (
                        <p className="text-[11px] font-medium text-amber-700 italic mb-2 leading-tight">
                            {project.tagline}
                        </p>
                    )}
                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-gray-100 text-gray-700 text-[10px] font-medium px-2 py-0.5 rounded border border-gray-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4 pt-2.5 border-t border-gray-100 mt-auto">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-xs transition-colors duration-200"
                    >
                        Live Demo ↗
                    </a>
                    {project.repoUrl && project.repoUrl !== '#' && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-semibold text-xs transition-colors duration-200"
                        >
                            View Code ↗
                        </a>
                    )}
                </div>
            </div>
        </div>
    </GlareHover>
);

// --- Main Projects Section Component ---
export default function Projects() {
    const displayedProjects = projectData.slice(0, 3);

    return (
        <section
            id="projects"
            className="relative w-full text-black py-20 overflow-hidden bg-white"
        >
            <InteractiveGridPattern
                className={cn(
                    "absolute inset-0 h-full w-full",
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
                )}
                width={20}
                height={20}
                squares={[80, 80]}
                squaresClassName="fill-gray-100"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            Projects
                        </Highlighter>
                    </h2>
                </div>

                {/* Explicit 3 Column Grid */}
                <div className="projects-three-col-grid max-w-6xl mx-auto">
                    {displayedProjects.map((project, index) => (
                        <div key={index} className="flex w-full">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {/* View More on GitHub Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/priyanshukamal26/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn !w-auto !px-8 !py-3 text-sm tracking-wide"
                    >
                        View more on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}