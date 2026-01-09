"use client";

import { skills } from "@/lib/data";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <Section id="skills" title="Skills" subtitle="My Expertise" className="bg-secondary/30">
            <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-3 w-full bg-muted overflow-hidden rounded-full">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                className="h-full bg-primary relative group-hover:bg-primary/80 transition-colors"
                            >
                                <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-r from-transparent to-white/30" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
