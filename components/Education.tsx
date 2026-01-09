"use client";

import { education, certifications } from "@/lib/data";
import Section from "./Section";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <Section id="education" title="Education & Certifications" subtitle="My Learning Path">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Education Column */}
                <div>
                    <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
                        <GraduationCap className="w-6 h-6 text-primary" /> Academic History
                    </h3>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-all"
                            >
                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded mb-2 inline-block">
                                    {edu.date}
                                </span>
                                <h4 className="text-lg font-bold">{edu.degree}</h4>
                                <p className="text-muted-foreground">{edu.institution}</p>
                                <p className="text-sm font-medium mt-2 text-foreground/80">Grade: {edu.grade}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Column */}
                <div>
                    <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
                        <Award className="w-6 h-6 text-primary" /> Certifications
                    </h3>
                    <div className="flex flex-col gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-colors"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                <span className="font-medium text-foreground/90">{cert}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
