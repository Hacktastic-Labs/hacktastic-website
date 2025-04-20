"use client";
import dynamic from "next/dynamic";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "motion/react";
import { NavbarMain } from "@/components/navbar";
import { Suspense } from "react";

// Dynamically import heavy components
const BentoGridProj = dynamic(
  () => import("@/components/projects").then((mod) => mod.BentoGridProj),
  {
    loading: () => (
      <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
    ),
  }
);

const Team = dynamic(
  () => import("@/components/team").then((mod) => mod.Team),
  {
    loading: () => (
      <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
    ),
  }
);

const HackTimeline = dynamic(
  () => import("@/components/timeline").then((mod) => mod.HackTimeline),
  {
    loading: () => (
      <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
    ),
  }
);

const ContactUs = dynamic(
  () => import("@/components/contactus").then((mod) => mod.ContactUs),
  {
    loading: () => (
      <div className="animate-pulse h-48 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
    ),
  }
);

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
            <Suspense
              fallback={
                <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
              }
            >
              <BentoGridProj />
            </Suspense>
          </div>
        </HeroHighlight>

        <HeroHighlight containerClassName="h-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="team">
            <Suspense
              fallback={
                <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
              }
            >
              <Team />
            </Suspense>
          </div>
        </HeroHighlight>

        <HeroHighlight containerClassName="h-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="timeline">
            <Suspense
              fallback={
                <div className="animate-pulse h-96 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
              }
            >
              <HackTimeline />
            </Suspense>
          </div>
        </HeroHighlight>

        <HeroHighlight>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact">
            <Suspense
              fallback={
                <div className="animate-pulse h-48 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
              }
            >
              <ContactUs />
            </Suspense>
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
