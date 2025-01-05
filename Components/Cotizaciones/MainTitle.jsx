
import Image from "next/image"
import { useTheme } from "@/context/ThemeContext";
import DarkSite from "../DarkSite/DarkSite";

const MainTitle = () => {

  const { dark, toggleDarkMode } = useTheme();
  const themeClass = dark ? 'text-slate-400' : 'text-slate-700'; 

  return (
    <div className={`flex flex-col justify-center items-center ${themeClass}`}>
      <div className='rounded-full border-2 p-2 shadow-lg bg-white'>
        <Image
          src={'/assets/money.svg'}
          width={70}
          height={40}
          alt="logo"
          className="p-1"
        />
      </div>
      <div className=''>
        <h1 className="py-4 px-2 text-center text-4xl font-bold">Cotizaciones</h1>
        <h2 className='text-2xl mb-2 text-center'>Te mostramos las cotizaciones de los dólares más relevantes.</h2>
      </div>
    </div>
  )
}

export default MainTitle
