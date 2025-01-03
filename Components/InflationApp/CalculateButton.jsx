import { useTheme } from "@/context/ThemeContext";
import DarkSite from "../DarkSite/DarkSite";

const CalculateButton = ({ onClick }) => {

    const { dark, toggleDarkMode } = useTheme();
    const themeClass = dark ? 'bg-[#121212]' : 'bg-blue-700';

    return (
        <div className="flex flex-row justify-start ">
            <button
                onClick={onClick}
                className={`my-4 rounded-lg px-4 py-1 ${themeClass} hover:bg-blue-500 border-b-blue-400 duration-300 text-gray-100`}
            >
                Calcular
            </button>
        </div>
    )
};

export default CalculateButton;