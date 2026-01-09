"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, title, subtitle, children, className }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 px-6", className)}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center md:text-left"
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">{subtitle}</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2">{title}</h2>
                    <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto md:mx-0" />
                </motion.div>
                {children}
            </div>
        </section>
    );
}
