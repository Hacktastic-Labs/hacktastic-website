"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { BentoGridProj } from "@/components/projects";
import { motion } from "motion/react";
import { Team } from "@/components/team";
import { NavbarMain } from "@/components/navbar";
import { HackTimeline } from "@/components/timeline";
import { ContactUs } from "@/components/contactus";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <NavbarMain />
      <div className="relative">
        <HeroHighlight containerClassName="min-h-[60vh] flex items-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            welcome to{" "}
            <Highlight className="text-black dark:text-white">
              hacktastic labs.
            </Highlight>
          </motion.h1>
        </HeroHighlight>

        <HeroHighlight containerClassName="h-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="projects">
            <BentoGridProj />
          </div>
        </HeroHighlight>

        <HeroHighlight containerClassName="h-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="team">
            <Team />
          </div>
        </HeroHighlight>

        <HeroHighlight containerClassName="h-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="timeline">
            <HackTimeline />
          </div>
        </HeroHighlight>
        <HeroHighlight>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact">
            <ContactUs />
          </div>
        </HeroHighlight>
        <div className="flex items-center justify-center py-3">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Made with ❤️ by Hacktastic • © {new Date().getFullYear()} All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
