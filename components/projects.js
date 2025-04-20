import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridProj() {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">
          Our Projects
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Discover our innovative solutions and groundbreaking projects
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform hover:scale-[1.02] hover:shadow-xl"
          >
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          </a>
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Lecture Tracker",
    description: "keep track of your lectures and assignments.",
    header: (
      <img
        src="https://res.cloudinary.com/dztauqacf/image/upload/v1745088140/Screenshot_2025-04-20_at_12.07.25_AM_q2z9uy.png"
        alt="Lecture Tracker"
        className="w-full min-h-[6rem] rounded-xl object-cover"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Hacktastic-Labs/hackarcode-2024",
  },
  {
    title: "AI Powered attendance system",
    description: "Dive into the transformative power of technology.",
    header: (
      <img
        src="https://res.cloudinary.com/dztauqacf/image/upload/v1745088141/Screenshot_2025-04-20_at_12.09.26_AM_ocbnmp.png"
        alt="AI Powered attendance system"
        className="w-full min-h-[6rem] rounded-xl object-cover"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Hacktastic-Labs/MAIT-Hackathon",
  },
  {
    title: "BuzzMeet",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <img
        src="https://res.cloudinary.com/dztauqacf/image/upload/v1745088140/Screenshot_2025-04-20_at_12.06.25_AM_p8llaz.png"
        alt="BuzzMeet"
        className="w-full min-h-[6rem] rounded-xl object-cover"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Hacktastic-Labs/srm-buzzmeet",
  },
  {
    title: "Edu Bounty",
    description: "Join the quest for learning, earning and enlightenment.",
    header: (
      <img
        src="https://res.cloudinary.com/dztauqacf/image/upload/v1745088139/Screenshot_2025-04-20_at_12.05.51_AM_cicarw.png"
        alt="Edu Bounty"
        className="w-full min-h-[6rem] rounded-xl object-cover"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Hacktastic-Labs/Edu-Chain-Sem-3",
  },
  {
    title: "Acharya the AI tutor",
    description:
      "Experience the thrill of bringing ideas to life. revolutionizing learning.",
    header: (
      <img
        src="https://res.cloudinary.com/dztauqacf/image/upload/v1745088140/Screenshot_2025-04-20_at_12.11.01_AM_swursn.png"
        alt="Acharya the AI tutor"
        className="w-full min-h-[6rem] rounded-xl object-cover"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Hacktastic-Labs/acharya",
  },
];
