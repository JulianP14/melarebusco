'use client'
import { useEffect, useState } from 'react';
import DarkSite from "@/Components/DarkSite/DarkSite";
import HomeSite from "@/Components/HomeSite";
import Footer from '@/Components/Footer/Footer';
import ShowWebs from '@/Components/ShowWebs';
import { useTheme } from '@/context/ThemeContext';

export default function Home({ children }) {
  const { dark, toggleDarkMode } = useTheme();

  /*   // Estado para manejar el modo oscuro
    const [dark, setDark] = useState(false);
  
    // Función para alternar el tema
    const toggleDarkMode = () => {
      setDark(prevDark => {
        const newDarkMode = !prevDark;
        localStorage.setItem('darkMode', newDarkMode);
        return newDarkMode;
      });
    };
  
    // Cargar el estado inicial desde localStorage al montar el componente
    useEffect(() => {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode !== null) {
        setDark(JSON.parse(savedDarkMode));
      }
    }, []); // Se ejecuta una sola vez cuando se monta el componente */

  const themeClass = dark ? 'bg-[#121212] text-white' : 'bg-[#faf9f9] text-black';

  return (
    <main className={`w-full lg:h-screen ${themeClass} flex flex-col pt-4`}>
      <div className="flex flex-grow justify-center items-center">
        <HomeSite />
        <div className="flex mix-w-fit">
          <DarkSite dark={dark} onToggleDarkMode={toggleDarkMode} />
        </div>
      </div>
      <div className="flex flex-col flex-grow w-full">
        <div className="flex-grow flex justify-center">
          <ShowWebs />
        </div>
        <Footer className="w-full" />
      </div>

    </main>
  );
}
