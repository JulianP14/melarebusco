'use client'
import { useTheme } from '@/context/ThemeContext'; 
import MainTitle from "@/Components/Cotizaciones/MainTitle";
import Volver from "@/Components/InflationApp/Volver";
import Cotizacion from "@/Components/Cotizaciones/Cotizacion";
import DarkSite from "@/Components/DarkSite/DarkSite";  

const Cotizaciones = () => {
  const { dark, toggleDarkMode } = useTheme();
  const themeClass = dark ? 'bg-[#121212] text-white' : 'bg-[#faf9f9] text-black'; 

  return (
    <main className={`h-screen w-full flex flex-col items-center justify-start absolute ${themeClass}`}>
      <div className="flex flex-col px-4 pt-10 pb-4">
        <MainTitle />
        <Cotizacion />
      </div>
      <div className="pt-5">
        <Volver />
      </div>

      {/* Componente para cambiar el modo oscuro */}
      <div className="absolute top-4 right-4">
        <DarkSite dark={dark} onToggleDarkMode={toggleDarkMode} />
      </div>
    </main>
  );
};

export default Cotizaciones;
