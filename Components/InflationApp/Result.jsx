'use client'
import MoonLoader from 'react-spinners/PropagateLoader'
import { useState } from 'react'

const Result = ({ contadoCuotas, cuotasFijasInt, montoContado, montoEnCuotas, cantidadCuotas }) => {

  // console.log(montoContado, montoEnCuotas)

  let cC = Number(contadoCuotas.toFixed(2));
  let cFi = Number(cuotasFijasInt.toFixed(2));
  let cantidadDeCuotas = Number(cantidadCuotas);

  const [isLoading, setIsLoading] = useState(true);
  const [isContado, setIsContado] = useState('');
  const [isCuotas, setIsCuotas] = useState('');


  setTimeout(() => {
    setIsLoading(false)
  }, 2000);

  const reset = () => {
    window.location.reload();
  };

  const handleOption = () => {
    return cC > cFi || cC === cFi
      ? <h2 className='text-3xl md:text-4xl font-bold text-gray-600'>Conviene en Cuotas</h2>
      : <h2 className='text-3xl md:text-4xl font-bold text-gray-600'>Conviene de Contado</h2>
  };


  return (
    <div className='w-full flex flex-col items-center justify-start my-10' >
      {isLoading ? (
        <MoonLoader
          color={'#256beb'}
          loading={isLoading}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
          className={'mt-4'}
        />
      ) : (
        <div className='flex flex-col bg-gray-300 bg-gradient-to-t rounded-lg py-6 shadow-2xl border-b-2 items-center justify-center w-[25rem] sm:w-[35rem] md:w-[45rem] text-gray-500 '>
          <div className='px-8 py-4 flex flex-col items-start w-full'>
            <div className='flex flex-col items-start w-full'>
              {handleOption()}
            </div>
            <div className='flex flex-col sm:flex-row w-full gap-4'>
              {cC > cFi || cC === cFi ?
                (
                  <>
                    <p className='py-2 text-red-600 text-xl '>{`Contado en cuotas: $${cC}`}</p>
                    <p className='py-2 text-green-600 text-xl '>{`En cuotas fijas: $${cFi}`}</p>
                  </>)
                :
                (
                  <>
                    <p className='py-2 text-green-600 text-xl'>{`Contado en cuotas: $${cC}`}</p>
                    <p className='py-2 text-red-600 text-xl'>{`En cuotas fijas: $${cFi}`}</p>
                  </>
                )
              }

            </div>
          </div>
          <div className='px-8 py-2 flex flex-col items-start w-full'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-600'>Diferencia</h2>
            <div className='flex flex-col text-xl mt-2'>
              {cC > cFi || cC === cFi ?
                (
                  <>
                    <p className='flex self'>
                      Con la inflación ajustada, el monto de contado (en cuotas) sería de:
                    </p>
                    <div>
                      <p className='text-red-600 text-2xl '>
                        ${Number(cC*cantidadDeCuotas).toFixed(2)}
                      </p>
                    </div>
                    <p>
                      Un incremento sobre el monto original de: 
                    </p>
                    <p className='text-red-600 text-4xl outline-none my-4 hover:scale-110 duration-300'>
                      {Number((((cC*cantidadDeCuotas)*100)/ montoContado) - 100).toFixed(2)}%
                    </p>
                  </>
                )
                :
                (
                  <>
                    <p className='flex self'>
                    Con la inflación ajustada, el monto de contado (en cuotas) sería de:
                    </p>
                    <div>
                      <p className='text-green-600 text-2xl '>
                        ${Number(cC*cantidadDeCuotas).toFixed(2)}
                      </p>
                    </div>
                    <p>
                      Estarías ahorrando, con respecto a las cuotas fijas, un:  
                    </p>
                    <p className='text-green-600 text-4xl my-4 hover:scale-105 duration-300'>
                      {Number(100-(((cC *cantidadDeCuotas)*100)/ montoEnCuotas)).toFixed(2)}%
                    </p>
                  </>
                )}
            </div>
          </div>
          <div className='flex flex-row justify-start w-full px-8'>
            <button
              onClick={reset}
              className='rounded-lg px-4 py-1 bg-blue-400 hover:bg-blue-500 text-lg hover:scale-105 duration-300 text-gray-200'
            >
              Rehacer
            </button>
          </div>
        </div>
  )
}
    </div >
  )
};

export default Result;