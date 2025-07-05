import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedPreference = localStorage.getItem('dark-mode');
      if (storedPreference !== null) {
        console.log('Initial dark mode from localStorage:', storedPreference);
        return storedPreference === 'true';
      }
      // Fallback to system preference or document class
      const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const hasClass = document.documentElement.classList.contains('dark');
      console.log('Initial dark mode from system preference or class:', systemPref, hasClass);
      return systemPref || hasClass;
    }
    return false;
  });

  useEffect(() => {
    console.log('Dark mode state changed:', isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
      console.log('Added dark class and set localStorage true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
      console.log('Removed dark class and set localStorage false');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    console.log('Toggling dark mode from:', isDark);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className=" py-2 rounded-xl  border-blue-700 bg-gray-100 text-blue-400 dark:bg-gray-400 dark:text-black transition z-50"
      style={{ position: 'relative' }}
    >
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
