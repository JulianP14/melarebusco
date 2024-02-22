import { useState } from "react";

const Impuestos = ({ valueInput, dollarFixed, isUsd }) => {

  const [agregarQatar, setAgregarQatar] = useState(true);

  /* Renderizado en ARS */
  const dolarSinImp = Number(valueInput);
  const impuestoPais = Number(dolarSinImp * .08);
  const impuestoGanancias = Number(dolarSinImp * .3);
  // const impuestoQatar = Number(dolarSinImp * .05);
  const iva = Number(dolarSinImp * .21)
  /* Renderizado en USD */
  const dolarSinImpUsd = Number(valueInput * dollarFixed);
  const impuestoPaisUsd = Number(dolarSinImpUsd * .3);
  const impuestoGananciasUsd = Number(dolarSinImpUsd * .3);
  // const impuestoQatarUsd = Number(dolarSinImpUsd * .05);
  const ivaUsd = Number(dolarSinImpUsd * .21)

  const sumaTotal = () => {
    let total = dolarSinImp + impuestoPais + impuestoGanancias + iva;
    // if (agregarQatar) {
    //   total += impuestoQatar;
    // }
    return formatMoney.format(total);
  };
  const sumaTotalUsd = () => {
    let total = dolarSinImpUsd + impuestoPaisUsd + impuestoGananciasUsd + ivaUsd;
    // if (agregarQatar) {
    //   total += impuestoQatarUsd;
    // }
    return formatMoney.format(total);
  };

  const formatMoney = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      {isUsd ? (
        <div>
          <div className="border border-y-gray-200 w-full p-2 flex flex-col">
            <div className="flex justify-between w-full">
              <p className="">Sin Impuestos:</p>
              <p>{formatMoney.format(dolarSinImpUsd)}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>+ Imp. PAIS 8%:</p>
              <p>{formatMoney.format(impuestoPaisUsd)}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>+ IVA 21%:</p>
              <p>{formatMoney.format(ivaUsd)}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>+ Imp. Ganancias 30%:</p>
              <p>{formatMoney.format(impuestoGananciasUsd)}</p>
            </div>
          </div>
          <div className="flex justify-start w-full p-2">
            <input
              type="checkbox"
              checked={agregarQatar}
              onChange={() => setAgregarQatar(!agregarQatar)}
            />
            <p className="mx-2">Incluir Imp. Qatar:</p>
          </div>
          {/* <div className="pb-2">
            {agregarQatar
              ?
              (<div className="flex justify-between w-full px-2">
                <p>+ Imp. Qatar 5%:</p>
                <span>
                  {`${formatMoney.format(impuestoQatarUsd)}`}
                </span>
              </div>)
              :
              (<></>)}
          </div> */}
          <div className="h-full flex justify-between w-full px-2 border border-y-gray-200 py-4">
            <p>Total: </p>
            <p className="text-2xl text-green-700">{sumaTotalUsd()}</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="border border-y-gray-200 w-full p-2 flex flex-col">
            <div className="flex justify-between w-full">
              <p className="">Sin Impuestos:</p>
              <p>{formatMoney.format(dolarSinImp)}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>+ Imp. PAIS 8%:</p>
              <p>{formatMoney.format(impuestoPais)}</p>
            </div>
            <div className="flex justify-between w-full">
                <p>+ IVA 21%:</p>
              <p>{formatMoney.format(iva)}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>+ Imp. Ganancias 30%:</p>
              <p>{formatMoney.format(impuestoGanancias)}</p>
            </div>
          </div>
          <div className="flex justify-start w-full p-2">
            <input
              type="checkbox"
              checked={agregarQatar}
              onChange={() => setAgregarQatar(!agregarQatar)}
            />
            <p className="mx-2">Incluir Imp. Qatar:</p>
          </div>
        {/*  <div className="pb-2">
            {agregarQatar
              ?
              (<div className="flex justify-between w-full px-2">
                <p>+ Imp. Qatar 5%:</p>
                <span>
                  {`${formatMoney.format(impuestoQatar)}`}
                </span>
              </div>)
              :
              (<></>)}
          </div> */}
          <div className="h-full flex justify-between w-full px-2 border border-y-gray-200 py-4">
            <p>Total: </p>
            <p className="text-2xl text-green-700">{sumaTotal()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Impuestos
