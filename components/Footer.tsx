"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="py-8 bg-card border-t border-border mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>

                <div className="flex gap-4">
                    {personalInfo.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
