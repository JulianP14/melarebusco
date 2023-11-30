
import Link from "next/link";

const HowWeDoIt = () => {

  return (
    <div className="bg-[#faf9f9] h-screen flex flex-col items-center justify-start text-white w-screen">
      <div className="h-full my-6 flex flex-col justify-around items-center ">
        <div className=" flex flex-col justify-center shadow-xl">
          <div className=" bg-[#e5e7eb] rounded-lg h-full max-w-sm">
            <div className="bg-[#e5e7eb] py-4 rounded-t-md  flex flex-row justify-center border-t-2">
              <h2 className="text-2xl text-blue-400 font-bold shadow-lg rounded-xl px-2">Cómo lo Calculamos 🧐</h2>
            </div>
            <div className="flex flex-col py-2 px-4 text-black">
              <p className="text-lg my-2"> 🧿 <strong>¿Necesitas saber si te conviene en cuotas o de contado?</strong> Acá te ayudamos a decidir.</p>
              <p className="text-lg my-2"> 🧿 Al valor de contado le ajustamos la inflación mensual ingresada (de este dato se obtiene un valor estimado <strong>constante</strong> para la anual). <strong>Por ejemplo</strong>, si la inflación mensual es <strong>5%</strong>, la anual total es <strong>79%</strong>.</p>
              <p className="text-lg my-2"> 🧿 <strong>Calculamos los valores</strong> y realizamos las operaciones correspondientes para comparar los dos precios (contado vs cuotas).</p>
              <p className="text-lg my-2"> 🧿 Se obtienen los dos valores y se los divide por la cantidad de <strong>meses ingresados</strong> para ver cuál es el más barato.</p>
              <p className="text-lg my-2"> 🧿 Con el resultado anterior, <strong>se recomendará</strong> comprar el producto de una u otra forma.</p>

            </div>
          </div>
        </div>
      </div>


      <div className='w-full mt-2 px-4 flex flex-col items-center justify-center rounded-t-3xl bg-[#051429]'>
        <Link
          href={'/inflationapp'}
          className='my-5 flex flex-col justify-center hover:scale-105 duration-300 hover:text-blue-400'
        >
          <p className="text-xl ">
            Volver.
          </p>
        </Link>
      </div>

    </div>
  )
}

export default HowWeDoIt