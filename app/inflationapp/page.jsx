// app/inflationapp/page.jsx
'use client';

import { useTheme } from '@/context/ThemeContext';  
import HomeSite from '@/Components/InflationApp/HomeSite';
import DarkSite from '@/Components/DarkSite/DarkSite';  

export default function InflationApp() {
  const { dark, toggleDarkMode } = useTheme(); 
  const themeClass = dark ? 'bg-[#121212] text-white' : 'bg-[#faf9f9] text-black';

  return (
    <main className={`w-full ${themeClass}`}>
      <HomeSite />
      <div className="absolute top-4 right-4">
        <DarkSite />
      </div>
    </main>
  );
}
