"use client";

import { experience } from "@/lib/data";
import Section from "./Section";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <Section id="experience" title="Experience" subtitle="My Journey">
            <div className="relative border-l border-primary/20 ml-3 md:ml-6 space-y-12 py-4">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <span className="absolute -left-3 top-0 bg-background p-1 border border-primary/20 rounded-full text-primary ring-4 ring-background">
                            <Briefcase className="w-5 h-5" />
                        </span>

                        <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform cursor-default">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold font-heading">{job.role}</h3>
                                    <p className="text-primary font-medium">{job.company}</p>
                                </div>
                                <div className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                    {job.date}
                                </div>
                            </div>

                            <ul className="space-y-2 list-disc list-inside text-muted-foreground marker:text-primary/70">
                                {job.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>

                            <p className="mt-4 text-xs font-medium text-muted-foreground flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> {job.location}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
