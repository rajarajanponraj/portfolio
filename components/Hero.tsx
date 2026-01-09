"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                        Available for Hire
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">{personalInfo.name}</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
                        {personalInfo.role}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                        {personalInfo.tagline}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#projects"
                            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg hover:shadow-primary/25"
                        >
                            View Work <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="#"
                            className="bg-white dark:bg-white/10 text-foreground border border-black/5 dark:border-white/10 px-8 py-3 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-sm"
                        >
                            Resume <Download className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="flex gap-4 mt-8">
                        {personalInfo.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-muted-foreground hover:text-primary hover:border-primary/20 transition-all shadow-sm"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Abstract geometric shape or Image placeholder */}
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden glass-card flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10" />
                        <div className="text-center p-8">
                            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
                            <p className="text-muted-foreground mt-4 italic">
                                "Turning complex problems into elegant solutions."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
