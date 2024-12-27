'use client'
import { useEffect, useState } from "react"
import Impuestos from "./Impuestos";

const DolarOficial = () => {

  const [dolar, setDolar] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [currencyUsd, setCurrencyUsd] = useState(false);
  const [activeButton, setActiveButton] = useState("ARS");

  const getDollar = async () => {
    try {
      const data = await fetch('https://criptoya.com/api/dolar');
      const response = await data.json();
      const { oficial } = response;
      return (setDolar(oficial));
    }
    catch (error) {
      return error;
    }
  };

  useEffect(() => {
    // Llamada inicial al montar el componente
    getDollar();

    // Configurar intervalo para llamadas periódicas
    const intervalId = setInterval(getDollar, 60000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []); // [] asegura que este efecto solo se ejecute una vez al montar el componente.

  const dollarFixed = Number(dolar.price).toFixed(2);


  const handleToggleUSD = () => {
    setCurrencyUsd(true);
    setActiveButton("USD");
  }

  const handleToggleARS = () => {
    setCurrencyUsd(false);
    setActiveButton("ARS");
  }

  const inputValue = (e) => {
    const valor = Number(e.target.value);
    return (setValueInput(valor))
  }

  return (
    <section className="flex flex-col items-center justify-center py-4 mt-6 w-full px-10 md:px-20 max-w-xl mb-14">
      <div className="border rounded-xl shadow-xl mx-4 w-[400px]">
        <div className="px-2 py-4">
          <span className="text-md">Ingresa un monto para calcular los impuestos</span>
        </div>
        <div className="bg-[#000830] flex justify-between w-full">
          <div className="text-2xl py-3 text-gray-200 flex justify-start w-4 mx-2">
            <span>$</span>
            <input
              className="outline-none h-full w-48 bg-[#000830] text-gray-200 ml-2"
              placeholder="10"
              type="number"
              onChange={(e) => { inputValue(e) }}
            >
            </input>
          </div>
          <div className="flex m-2 gap">
            <button
              className={`
                h-full px-2 rounded-l-full border-r font-bold bg-[#faf9f9] 
                ${activeButton === "ARS" 
                ? "text-[#000830]"
                : "text-gray-300"
                } outline-none
                `}
              onClick={handleToggleARS}
            >
              <span>ARS</span>
            </button>
            <button
              className={`
                h-full px-2 rounded-r-full border-l font-bold bg-[#faf9f9]
                ${activeButton === "USD" 
                ? "text-[#000830]"
                : "text-gray-300"
                } outline-none
                `}
              onClick={handleToggleUSD}
            >
              <span>USD</span>
            </button>
          </div>
        </div>

        <p className="py-4 border border-[#faf9f9] w-full px-2">
          Dolar Oficial: ${dollarFixed}
        </p>
        <Impuestos
          valueInput={valueInput}
          dollarFixed={dollarFixed}
          isUsd={currencyUsd}
        />
      </div>
    </section>
  )
}

export default DolarOficial