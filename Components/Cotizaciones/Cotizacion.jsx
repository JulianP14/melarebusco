'use client'

import { useEffect, useState } from "react";
// import DolarOficial from "../Impuestina/DolarOficial";

const Cotizacion = () => {
  const [dolar, setDolar] = useState('');

  const [dolarMep, setDolarMep] = useState('');
  const [dolarCCL, setDolarCCL] = useState('');
  const [dolarTarjeta, setDolarTarjeta] = useState('');
  const [dolarBlue, setDolarBlue] = useState('');
  const [dolarBlueBid, setDolarBlueBid] = useState('');


  const getDollar = async () => {
    try {
      const data = await fetch('https://criptoya.com/api/dolar');
      const response = await data.json();
      const { oficial, mep, ccl, blue, tarjeta } = response;
      //console.log(response)
      setDolar(oficial.price);
      setDolarMep(mep.al30.ci.price);
      setDolarCCL(ccl.al30.ci.price);
      setDolarTarjeta(tarjeta.price);
      setDolarBlue(blue.ask);
      setDolarBlueBid(blue.bid)

    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    // Llamada inicial al montar el componente
    getDollar();

    // Configurar intervalo para llamadas periódicas
    const intervalId = setInterval(getDollar, 60000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []); // [] asegura que este efecto solo se ejecute una vez al montar el componente

  const dollarFixed = Number(dolar).toFixed(2);
  const dollarMepFixed = Number(dolarMep).toFixed(2);
  const dollarCCLFixed = Number(dolarCCL).toFixed(2);
  const dollarTarjetaFixed = Number(dolarTarjeta).toFixed(2);
  const dollarBlueFixed = Number(dolarBlue).toFixed(2);
  const dollarBlueBidFixed = Number(dolarBlueBid).toFixed(2);

  const dollars = [
    {
      id: 1,
      name: 'Dolar Oficial:',
      dollar: dollarFixed,
    },
    {
      id: 2,
      name: 'Dolar MEP:',
      dollar: dollarMepFixed,
    },
    {
      id: 3,
      name: 'Dolar CCL:',
      dollar: dollarCCLFixed,
    },
    {
      id: 4,
      name: 'Dolar Tarjeta:',
      dollar: dollarTarjetaFixed,
    }
  ]

  return (
    <section className="w-full px-10 my-5">
      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex flex-col items-center border-2 border-green-800 rounded-lg px-5 py-4 shadow-xl w-[350px]">
          <div className="">
            <h2 className="text-3xl bg-gradient-to-r from-[#101419] via-70% to-[#168374] bg-clip-text text-transparent font-bold text-center py-4">Dolar Blue:</h2>
            <div className="flex items-center gap-8 text-xl py-4">
              <div className="flex-col text-lg font-semibold text-black hover:text-xl transition-all">
                <p>Compra:</p>
                <p>${dollarBlueBidFixed}</p>
              </div>
              <div className="flex-col text-lg font-semibold text-black hover:text-xl  transition-all">
                <p>Venta:</p>
                <p>${dollarBlueFixed}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-wrap md:gap-4 items-center justify-center max-w-[900px]">
          {dollars.map(({ id, name, dollar }) => (
            <div
              key={id}
              className=" w-[300px] border-t-2 border-green-800 rounded-lg px-5 py-4 my-4 shadow-xl"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-2xl border-b-2 rounded-lg border-green-800 bg-gradient-to-r from-[#101419] via-70% to-[#168374] bg-clip-text text-transparent font-bold">{name}</h2>
                <div className="flex justify-center py-2">
                  <div className="flex-col items-center">
                    <p className="text-lg font-medium text-black hover:text-xl transition-all">${dollar}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

}

export default Cotizacion