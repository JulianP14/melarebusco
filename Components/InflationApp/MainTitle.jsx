import Image from "next/image"
import DarkSite from "../DarkSite/DarkSite";
import { useTheme } from "@/context/ThemeContext";

const MainTitle = () => {

    const { dark, toggleDarkMode } = useTheme();
    const themeClass = dark ? 'bg-[#faf9f9]' : 'bg-[#faf9f9]';

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className={`rounded-full border-2 p-2 shadow-lg ${themeClass}`}>
                <Image
                    src={'/assets/impuestina.svg'}
                    width={80}
                    height={40}
                    alt='logo'
                    className='p-1'
                />
            </div>
            <div className=''>
                <h1 className='py-4 px-2 text-center text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent'>Calculadora de Inflación</h1>
                <h2 className='text-2xl mb-2 text-center text-gray-500'>Te ayudamos a decidir si comprar, o no, en cuotas</h2>
            </div>
        </div>
    )
};

export default MainTitle;