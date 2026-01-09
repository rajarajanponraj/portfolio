"use client";

import { projects } from "@/lib/data";
import Section from "./Section";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Layers } from "lucide-react";

export default function Projects() {
    return (
        <Section id="projects" title="Projects" subtitle="What I've Built" className="bg-secondary/30">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-card dark:bg-card/50 border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col"
                    >
                        {/* Image Placeholder - Gradient for now */}
                        <div className={`h-48 w-full bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500 relative`}>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                                <a
                                    href={project.link}
                                    className="px-4 py-2 bg-white text-black px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors"
                                >
                                    View Project <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                            <div className="mb-4">
                                <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2 flex items-center gap-1">
                                    <Layers className="w-3 h-3" /> Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 bg-secondary rounded-md border border-secondary font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2 flex items-center gap-1">
                                    <Code2 className="w-3 h-3" /> Features
                                </h4>
                                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                                    {project.features.slice(0, 2).map((feat, i) => (
                                        <li key={i} className="line-clamp-1">{feat}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                                <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full ml-auto">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
