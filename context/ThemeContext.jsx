// app/context/ThemeContext.js
'use client'

import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  // Cargar el estado inicial desde localStorage al montar el componente
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDark(JSON.parse(savedDarkMode));  // Establece el estado de "dark" con el valor guardado
    }
  }, []);  // Se ejecuta una sola vez cuando se monta el componente

  // Función para alternar el tema
  const toggleDarkMode = () => {
    setDark(prevDark => {
      const newDarkMode = !prevDark;
      localStorage.setItem('darkMode', newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para acceder al contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
