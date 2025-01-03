// app/cotizaciones/page.jsx
'use client'

import { useTheme } from '@/context/ThemeContext';  // Asegúrate de importar el contexto
import MainTitle from "@/Components/Cotizaciones/MainTitle";
import Volver from "@/Components/InflationApp/Volver";
import Cotizacion from "@/Components/Cotizaciones/Cotizacion";
import DarkSite from "@/Components/DarkSite/DarkSite";  // Asegúrate de tener el botón para cambiar el tema

const Cotizaciones = () => {
  const { dark, toggleDarkMode } = useTheme();  // Usamos el contexto para obtener el tema y la función

  const themeClass = dark ? 'bg-[#121212] text-white' : 'bg-[#faf9f9] text-black';  // Cambiar el tema según el estado

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
