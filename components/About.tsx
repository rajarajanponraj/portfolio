"use client";

import { personalInfo } from "@/lib/data";
import Section from "./Section";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function About() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Section id="about" title="About Me" subtitle="Who I Am">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-square rounded-2xl overflow-hidden glass-card p-2 rotate-3 hover:rotate-0 transition-all duration-500"
                >
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center text-muted-foreground">
                        {/* Placeholder for real image since I can't upload one easily in this flow yet, user can replace */}
                        <span className="text-xl">Profile Image</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={`space-y-4 text-muted-foreground text-lg leading-relaxed relative ${!expanded ? "max-h-[300px] overflow-hidden mask-gradient" : ""}`}>
                        {personalInfo.about}
                        {!expanded && (
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
                        )}
                    </div>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-primary font-medium mt-4 flex items-center gap-1 hover:underline"
                    >
                        {expanded ? <>Read Less <ChevronUp className="w-4 h-4" /></> : <>Read More <ChevronDown className="w-4 h-4" /></>}
                    </button>

                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <h3 className="font-bold text-2xl text-primary">2+</h3>
                            <p className="text-sm text-foreground/80">Years Experience</p>
                        </div>
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <h3 className="font-bold text-2xl text-primary">10+</h3>
                            <p className="text-sm text-foreground/80">Projects Built</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
