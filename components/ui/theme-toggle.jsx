"use client";
import { useTheme } from "@/app/providers";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { motion } from "motion/react";

export const ThemeToggle = () => {
  const { isDarkMode, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-500 hover:text-neutral-600 dark:bg-neutral-800/80 dark:text-neutral-400 dark:hover:text-neutral-300"
    >
      <div className="relative h-5 w-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isDarkMode ? 1 : 0, scale: isDarkMode ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <IconMoon className="h-5 w-5" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isDarkMode ? 0 : 1, scale: isDarkMode ? 0.5 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <IconSun className="h-5 w-5" />
        </motion.div>
      </div>
    </button>
  );
};
