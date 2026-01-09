"use client";

import { useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
    const [formState, setFormState] = useState<{
        name: string;
        email: string;
        message: string;
    }>({ name: "", email: "", message: "" });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <Section id="contact" title="Get in Touch" subtitle="Let's Work Together">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I'm currently available for freelance work and full-time positions.
                        If you have a project that needs some creative touch, or just want to say hi, my inbox is always open.
                    </p>

                    <div className="space-y-6">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                            <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email Me</p>
                                <p className="font-medium">{personalInfo.email}</p>
                            </div>
                        </a>

                        <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 group">
                            <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Call Me</p>
                                <p className="font-medium">{personalInfo.phone}</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-full bg-primary/10 text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="font-medium">{personalInfo.location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-8 rounded-2xl border border-border shadow-lg">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                placeholder="hello@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || submitted}
                            className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : submitted ? (
                                "Message Sent!"
                            ) : (
                                <>Send Message <Send className="w-4 h-4" /></>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}
