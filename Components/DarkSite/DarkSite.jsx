/* import React from 'react';
import Image from 'next/image';

const DarkSite = ({ dark, onToggleDarkMode }) => {
  const themes = [
    {
      id: '0',
      image: '/assets/moon.png', // Icono de la luna (modo oscuro)
    },
    {
      id: '1',
      image: '/assets/sun2.svg', // Icono del sol (modo claro)
    },
  ];

  return (
    <div className="px-4 text-left">
      <button 
        onClick={onToggleDarkMode}
      >
        <Image
          src={dark ? themes[1].image : themes[0].image}
          width={32}
          height={32}
          alt={dark ? 'sun' : 'moon'} // Cambiar el texto alternativo según el icono
          className='hover:rotate-45 duration-200'
        />
      </button>
    </div>
  );
};

export default DarkSite;
 */
// app/Components/DarkSite/DarkSite.jsx
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext'; // Importar el hook del contexto

const DarkSite = () => {
  const { dark, toggleDarkMode } = useTheme(); // Usar el hook del contexto

  const themes = [
    {
      id: '0',
      image: '/assets/moon.png', // Icono de la luna (modo oscuro)
    },
    {
      id: '1',
      image: '/assets/sun2.svg', // Icono del sol (modo claro)
    },
  ];

  return (
    <div className="px-4 text-left">
      <button onClick={toggleDarkMode}>
        <Image
          src={dark ? themes[1].image : themes[0].image}
          width={32}
          height={32}
          alt={dark ? 'sun' : 'moon'} // Cambiar el texto alternativo según el icono
          className="hover:rotate-45 duration-200"
        />
      </button>
    </div>
  );
};

export default DarkSite;
