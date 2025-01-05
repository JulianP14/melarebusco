'use client'
import { useState } from "react";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import CalculateButton from "./CalculateButton";
import InputQuotation from "./InputQuotation";
import InputInflation from "./InputInflation";
import InputAmountQuotation from "./InputAmountQuotation";
import InputAmountNow from "./InputAmountNow";
import Result from './Result';

const Inputs = () => {
    const MySwal = withReactContent(Swal);

    /* Estados de los inputs */
    const [contado, setContado] = useState('');
    const [montoCuotas, setMontoCuotas] = useState('');
    const [porcentaje, setPorcentaje] = useState('');
    const [cuotas, setCuotas] = useState('');

    /* Resultado listo */
    const [isReady, setIsReady] = useState(false);

    /* Valores pasados al hijo */
    const [contadoCuotas, setContadoCuotas] = useState('');
    const [cuotasFijasInt, setCuotasFijasInt] = useState('');

    const handleCheckInputContado = (e) => {
        const valor = Number(e.target.value);
        if (valor < 0 || typeof (valor) !== 'number') {
            MySwal.fire({
                title: <p>Error:</p>,
                text: "El valor ingresado no es válido",
                icon: 'error',
            });
            setContado('');
        } else {
            setContado(valor);
        }
    };
    const handleCheckInputCuotas = (e) => {
        const valor = Number(e.target.value);
        if (valor < 0 || typeof (valor) !== 'number') {
            MySwal.fire({
                title: <p>Error:</p>,
                text: "El valor ingresado no es válido",
                icon: 'error',
            });
            setMontoCuotas('');
            
        } else {
            setMontoCuotas(valor);
        }
    };
    // console.log(montoCuotas)
    const handlePorcentaje = (e) => {
        const valor = Number(e.target.value);
        if (valor < 0 || typeof (valor) !== 'number') {
            MySwal.fire({
                title: <p>Error:</p>,
                text: "El valor ingresado no es válido",
                icon: 'error',
            });
            setPorcentaje('');
        } else {
            setPorcentaje(valor);
        }
    };
    const handleCuotas = (e) => {
        setCuotas(e.target.value);
    };

    const handleTotal = (e) => {
        if (cuotas == '') {
            e.preventDefault();
            MySwal.fire({
                title: <p>Error:</p>,
                text: "Elija la cantidad de cuotas.",
                icon: 'error',
            });
            return
        }
        if (contado == '' || montoCuotas == '' || porcentaje == '') {
            e.preventDefault();
            MySwal.fire({
                title: <p>Error:</p>,
                text: "Faltan datos",
                icon: 'error',
            });
            return
        }
        else {
            e.preventDefault();
            setTimeout(() => {
                setIsReady(true)
            }, 1000);
            const handleInflacion = (tasaMensual, meses) => {
                const factorInflacion = 1 + tasaMensual / 100;
                const finalValue = Math.pow(factorInflacion, meses);
                const contadoCuotasInflacion = (contado * finalValue / meses)
                setContadoCuotas(contadoCuotasInflacion);
                const cuotasFijas = (montoCuotas / meses)
                setCuotasFijasInt(cuotasFijas);
            }
            return handleInflacion(porcentaje, cuotas);
        }
    }

    return (
        <div className="h-full w-full flex flex-col items-center mt-6 ">
            {isReady ?
                (<div className=" h-full w-full flex flex-col items-center justify-center">
                    <Result
                        contadoCuotas={contadoCuotas}
                        cuotasFijasInt={cuotasFijasInt}
                        montoContado={contado}
                        montoEnCuotas={montoCuotas}
                        cantidadCuotas={cuotas}
                    />
                </div>)
                :
                (<div className="w-full px-10 md:px-20 max-w-xl">
                    <form className='grid grid-cols-1 my-5 text-gray-500 shadow-xl rounded-xl px-4 bg-gray-200' autoComplete='off'>
                        <InputAmountNow
                            onChange={handleCheckInputContado}
                        />
                        <InputAmountQuotation
                            onChange={handleCheckInputCuotas}
                        />
                        <InputInflation
                            onChange={handlePorcentaje}
                        />
                        <InputQuotation
                            cuotas={cuotas}
                            onChange={handleCuotas}
                        />
                        <CalculateButton
                            onClick={handleTotal}
                        />
                    </form>
                </div>)
            }
        </div>
    )
};

export default Inputs;