import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full py-6">
      <div className="text-center text-sm text-neutral-600 dark:text-neutral-400">
        <p>Made with ❤️ by Hacktastic</p>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};
